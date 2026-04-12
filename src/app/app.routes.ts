import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app-layout/app-layout').then(m => m.AppLayout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
      },
      {
        path: 'learn',
        loadChildren: () => import('./features/learn/learn.routes').then(m => m.LEARN_ROUTES)
      },
      {
        path: 'simulate',
        loadChildren: () => import('./features/simulate/simulate.routes').then(m => m.SIMULATE_ROUTES)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./features/quiz/quiz.routes').then(m => m.QUIZ_ROUTES)
      },
      {
        path: 'ai-tutor',
        loadComponent: () => import('./features/ai-tutor/ai-tutor').then(m => m.AiTutor)
      },
      {
        path: 'progress',
        loadComponent: () => import('./features/progress/progress').then(m => m.Progress)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
