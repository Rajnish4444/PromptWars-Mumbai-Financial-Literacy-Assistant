export interface UnderstandingCheck {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface LearningModule {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  explanation: string;
  whyItMatters: string;
  dailyLifeExample: string;
  commonMistake: string;
  understandingCheck: UnderstandingCheck;
}
