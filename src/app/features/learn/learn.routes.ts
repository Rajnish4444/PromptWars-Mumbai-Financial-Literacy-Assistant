import { Routes } from '@angular/router';

export const LEARN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./learn').then(m => m.Learn)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/module-detail/module-detail').then(m => m.ModuleDetail)
  }
];
