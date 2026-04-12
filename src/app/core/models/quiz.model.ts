export interface QuizQuestion {
  id: string;
  scenario: string;
  options: string[];
  correctOptionIndex: number;
  successFeedback: string;
  failureFeedback: string;
}

export interface QuizTopic {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  id?: string;
  userId: string;
  topicId: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  timestamp: string;
}

export interface TopicMastery {
  userId: string;
  topicId: string;
  mastered: boolean;
  highestScore: number;
  attemptsCount: number;
  lastAttemptDate: string | null;
}
