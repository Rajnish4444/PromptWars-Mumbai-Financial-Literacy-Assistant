import { Routes } from '@angular/router';

export const SIMULATE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./simulate').then(m => m.Simulate)
  },
  {
    path: 'budget',
    loadComponent: () => import('./components/budget-simulator/budget-simulator').then(m => m.BudgetSimulator)
  },
  {
    path: 'compound-interest',
    loadComponent: () => import('./components/compound-interest-simulator/compound-interest-simulator').then(m => m.CompoundInterestSimulator)
  },
  {
    path: 'inflation',
    loadComponent: () => import('./components/inflation-simulator/inflation-simulator').then(m => m.InflationSimulator)
  },
  {
    path: 'savings',
    loadComponent: () => import('./components/savings-simulator/savings-simulator').then(m => m.SavingsSimulator)
  },
  {
    path: 'risk-return',
    loadComponent: () => import('./components/risk-return-simulator/risk-return-simulator').then(m => m.RiskReturnSimulator)
  }
];
