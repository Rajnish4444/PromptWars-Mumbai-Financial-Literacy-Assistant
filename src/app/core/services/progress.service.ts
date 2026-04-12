import { Injectable, inject } from '@angular/core';
import { QuizPersistenceService } from './quiz-persistence.service';
import { QUIZ_TOPICS } from '../data/quiz-topics.data';
import { TopicMastery, QuizTopic } from '../models/quiz.model';

export interface ProgressReport {
  overallCompletionPercentage: number;
  totalQuizzesTaken: number;
  masteredTopicsCount: number;
  weakTopics: TopicMastery[];
  recommendedNextTopic: QuizTopic | null;
}

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private quizService = inject(QuizPersistenceService);

  constructor() { }

  /**
   * Generates a comprehensive learning snapshot based on tracked Mastery.
   * Future Iteration: Import "Modules Read" from a ModulePersistenceService if one is required.
   */
  async generateLearningReport(userId: string = 'guest'): Promise<ProgressReport> {
    const allMastery = await this.quizService.getAllMastery(userId);

    const totalTopics = QUIZ_TOPICS.length;
    const masteredTopics = allMastery.filter(m => m.mastered);
    const masteredCount = masteredTopics.length;

    // Calc completion: Ratio of topics where mastery is achieved
    const rawPercentage = totalTopics === 0 ? 0 : (masteredCount / totalTopics) * 100;

    // Find weak topics: High attempts (>2) but never mastered, or extremely low score (<50)
    const weakTopics = allMastery.filter(m => {
      if (m.mastered) return false;
      return m.attemptsCount > 1 || m.highestScore < 60;
    });

    // Recommend next topic: Find the first topic sequentially that is NOT mastered.
    // If all are mastered, recommend null.
    let nextTopic: QuizTopic | null = null;
    for (const t of QUIZ_TOPICS) {
      if (!masteredTopics.find(m => m.topicId === t.id)) {
        nextTopic = t;
        break;
      }
    }

    const totalQuizzesTaken = allMastery.reduce((acc, curr) => acc + curr.attemptsCount, 0);

    return {
      overallCompletionPercentage: Math.round(rawPercentage),
      totalQuizzesTaken,
      masteredTopicsCount: masteredCount,
      weakTopics,
      recommendedNextTopic: nextTopic
    };
  }
}
