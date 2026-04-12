import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QUIZ_TOPICS } from '../../../../core/data/quiz-topics.data';
import { QuizPersistenceService } from '../../../../core/services/quiz-persistence.service';
import { TopicMastery } from '../../../../core/models/quiz.model';

@Component({
  selector: 'app-quiz-list',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './quiz-list.html',
  styleUrl: './quiz-list.scss',
})
export class QuizList implements OnInit {
  topics = QUIZ_TOPICS;
  masteryMap = signal<Record<string, TopicMastery>>({});
  
  private persistence = inject(QuizPersistenceService);

  async ngOnInit() {
    // For now, hardcode user as 'guest'
    const records = await this.persistence.getAllMastery('guest');
    const map: Record<string, TopicMastery> = {};
    for (const r of records) {
      map[r.topicId] = r;
    }
    this.masteryMap.set(map);
  }

  isMastered(topicId: string): boolean {
    return !!this.masteryMap()[topicId]?.mastered;
  }
}
