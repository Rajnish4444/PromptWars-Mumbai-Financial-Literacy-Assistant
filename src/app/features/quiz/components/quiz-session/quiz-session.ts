import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { QUIZ_TOPICS } from '../../../../core/data/quiz-topics.data';
import { QuizTopic, QuizQuestion, QuizAttempt } from '../../../../core/models/quiz.model';
import { QuizPersistenceService } from '../../../../core/services/quiz-persistence.service';

@Component({
  selector: 'app-quiz-session',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatRadioModule, MatProgressBarModule, FormsModule, MatIconModule],
  templateUrl: './quiz-session.html',
  styleUrl: './quiz-session.scss',
})
export class QuizSession implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private persistence = inject(QuizPersistenceService);

  topic = signal<QuizTopic | null>(null);
  currentQuestionIndex = signal(0);
  
  // State for the active question
  selectedOptionIndex = signal<number | null>(null);
  isAnswerSubmitted = signal(false);
  
  // Accumulate scores
  score = signal(0);

  currentQuestion = computed<QuizQuestion | null>(() => {
    const t = this.topic();
    if (!t) return null;
    return t.questions[this.currentQuestionIndex()] || null;
  });

  progressPercentage = computed(() => {
    const t = this.topic();
    if (!t) return 0;
    // Progress calculation based on current index (0 base requires +1 for visual)
    // Actually, progress before submitting should be index / length.
    return (this.currentQuestionIndex() / t.questions.length) * 100;
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const tId = params.get('topicId');
      const found = QUIZ_TOPICS.find(t => t.id === tId);
      if (found) {
        this.topic.set(found);
      } else {
        this.router.navigate(['/quiz']);
      }
    });
  }

  submitAnswer() {
    if (this.selectedOptionIndex() === null || this.isAnswerSubmitted()) return;

    this.isAnswerSubmitted.set(true);
    
    const q = this.currentQuestion();
    if (q && this.selectedOptionIndex() === q.correctOptionIndex) {
      this.score.update(s => s + 1);
    }
  }

  get isCorrect(): boolean {
    const q = this.currentQuestion();
    if (!q) return false;
    return this.selectedOptionIndex() === q.correctOptionIndex;
  }

  async nextQuestion() {
    const t = this.topic();
    if (!t) return;

    if (this.currentQuestionIndex() < t.questions.length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
      this.isAnswerSubmitted.set(false);
      this.selectedOptionIndex.set(null);
    } else {
      // Finish quiz
      await this.finishQuiz(t);
    }
  }

  private async finishQuiz(t: QuizTopic) {
    const total = t.questions.length;
    const finalScore = this.score();
    const percent = (finalScore / total) * 100;
    const passed = percent >= 70; // 70% to pass

    const attempt: QuizAttempt = {
      userId: 'guest',
      topicId: t.id,
      score: percent, // Storing as percentage
      totalQuestions: total,
      passed: passed,
      timestamp: new Date().toISOString()
    };

    await this.persistence.saveAttempt(attempt);

    // Navigate to summary and pass the local score to avoid waiting for db read
    // or just let summary read the latest attempt from the db. 
    this.router.navigate(['/quiz', t.id, 'summary'], {
      queryParams: { score: percent, passed: passed ? 'true' : 'false' }
    });
  }
}
