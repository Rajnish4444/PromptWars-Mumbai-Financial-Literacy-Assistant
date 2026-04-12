import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simulate',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './simulate.html',
  styleUrl: './simulate.scss',
})
export class Simulate {
  simulators = [
    {
      id: 'budget',
      title: 'Budget Splitter',
      icon: 'pie_chart',
      description: 'See how a 50/30/20 budget looks with your income.'
    },
    {
      id: 'savings',
      title: 'Savings Tracker',
      icon: 'savings',
      description: 'See how flat savings grow directly compared to what you put in.'
    },
    {
      id: 'compound-interest',
      title: 'Compound Interest Explorer',
      icon: 'auto_graph',
      description: 'Find out how your savings will multiply over time.'
    },
    {
      id: 'inflation',
      title: 'Inflation Impact',
      icon: 'trending_down',
      description: 'Visualize how rising prices reduce your purchasing power.'
    },
    {
      id: 'risk-return',
      title: 'Risk vs. Return',
      icon: 'balance',
      description: 'Compare safe investing vs. risky investing over time.'
    }
  ];
}
