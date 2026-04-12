import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDocs, getDoc, updateDoc } from '@angular/fire/firestore';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { QuizAttempt, TopicMastery } from '../models/quiz.model';
import { AuthService } from './auth.service';

/**
 * Validated Firebase Persistence Service replacing the mocked LocalStorage adapter.
 */
@Injectable({
  providedIn: 'root'
})
export class QuizPersistenceService {
  private firestore = inject(Firestore);
  private analytics = inject(Analytics, { optional: true });
  private auth = inject(AuthService);

  constructor() {}

  async saveAttempt(attempt: QuizAttempt): Promise<void> {
    const uid = this.auth.currentUserId;
    if (!uid) {
      console.warn("Unable to save attempt: user not authenticated.");
      return;
    }

    try {
      // 1. Save flat attempt
      const attemptId = `attempt_${new Date().getTime()}`;
      attempt.id = attemptId;
      attempt.userId = uid; // Enscribe immutable identity tag 
      const attemptsRef = doc(collection(this.firestore, 'quiz_attempts'), attemptId);
      await setDoc(attemptsRef, attempt);

      // 2. Aggregate Mastery in user scope
      await this.updateMastery(attempt, uid);

      // 3. Dispatch analytics
      if (this.analytics) {
        logEvent(this.analytics, 'quiz_completed', {
          topic_id: attempt.topicId,
          score: attempt.score,
          passed: attempt.passed
        });
      }
    } catch (e) {
      console.error("Firestore persistence error", e);
    }
  }

  async getMastery(topicId: string): Promise<TopicMastery | null> {
    const uid = this.auth.currentUserId;
    if (!uid) return null;

    const docRef = doc(this.firestore, `users/${uid}/mastery/${topicId}`);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as TopicMastery;
    }
    return null;
  }

  async getAllMastery(overrideId?: string): Promise<TopicMastery[]> {
    const uid = overrideId || this.auth.currentUserId;
    if (!uid) return [];

    const masteryCollection = collection(this.firestore, `users/${uid}/mastery`);
    const snap = await getDocs(masteryCollection);
    return snap.docs.map(d => d.data() as TopicMastery);
  }

  private async updateMastery(attempt: QuizAttempt, uid: string): Promise<void> {
    const docRef = doc(this.firestore, `users/${uid}/mastery/${attempt.topicId}`);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const current = snap.data() as TopicMastery;
      
      const payload: Partial<TopicMastery> = {
        attemptsCount: current.attemptsCount + 1,
        lastAttemptDate: attempt.timestamp
      };

      if (attempt.score > current.highestScore) payload.highestScore = attempt.score;
      if (attempt.passed && !current.mastered) payload.mastered = true;

      await updateDoc(docRef, payload);
    } else {
      const payload: TopicMastery = {
        userId: uid,
        topicId: attempt.topicId,
        mastered: attempt.passed,
        highestScore: attempt.score,
        attemptsCount: 1,
        lastAttemptDate: attempt.timestamp
      };
      await setDoc(docRef, payload);
    }
  }

  // Fallback map clear for testing UI states natively without emulators crashing
  clearMockDatabase() {}
}
