import { Routes } from '@angular/router';

export const QUIZ_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/quiz-list/quiz-list').then(m => m.QuizList)
  },
  {
    path: ':topicId',
    loadComponent: () => import('./components/quiz-session/quiz-session').then(m => m.QuizSession)
  },
  {
    path: ':topicId/summary',
    loadComponent: () => import('./components/quiz-summary/quiz-summary').then(m => m.QuizSummary)
  }
];
