import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QUIZ_TOPICS } from '../../../../core/data/quiz-topics.data';

@Component({
  selector: 'app-quiz-summary',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './quiz-summary.html',
  styleUrl: './quiz-summary.scss',
})
export class QuizSummary implements OnInit {
  public route = inject(ActivatedRoute);

  topicName = signal('');
  score = signal(0);
  passed = signal(false);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('topicId');
      this.topicName.set(QUIZ_TOPICS.find(t => t.id === id)?.title || 'Quiz');
    });

    this.route.queryParamMap.subscribe(query => {
      this.score.set(Number(query.get('score')) || 0);
      this.passed.set(query.get('passed') === 'true');
    });
  }
}
