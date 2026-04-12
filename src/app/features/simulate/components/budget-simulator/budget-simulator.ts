import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { calculateBudgetSplit } from '../../../../core/domain/simulators.logic';
import { DataVizFallback, VizDataPoint } from '../../../../shared/components/data-viz-fallback/data-viz-fallback';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-budget-simulator',
  imports: [CommonModule, FormsModule, MatCardModule, MatSliderModule, MatIconModule, MatButtonModule, RouterModule, DataVizFallback],
  templateUrl: './budget-simulator.html',
  styleUrl: './budget-simulator.scss',
})
export class BudgetSimulator {
  monthlyIncome = signal(4000);

  budgetSplit = computed(() => calculateBudgetSplit(this.monthlyIncome()));

  chartData = computed<VizDataPoint[]>(() => {
    const split = this.budgetSplit();
    return [
      { label: 'Needs (50%)', value: split.needs },
      { label: 'Wants (30%)', value: split.wants },
      { label: 'Savings (20%)', value: split.savings }
    ];
  });
}
