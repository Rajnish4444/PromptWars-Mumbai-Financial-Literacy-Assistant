import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { calculateRiskReturnComparison } from '../../../../core/domain/simulators.logic';
import { DataVizFallback, VizDataPoint } from '../../../../shared/components/data-viz-fallback/data-viz-fallback';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-risk-return-simulator',
  imports: [CommonModule, FormsModule, MatCardModule, MatSliderModule, MatIconModule, MatButtonModule, RouterModule, DataVizFallback],
  templateUrl: './risk-return-simulator.html',
  styleUrl: './risk-return-simulator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RiskReturnSimulator {
  investmentAmount = signal(10000);
  riskLevel = signal(5);
  years = signal(10);

  riskData = computed(() => {
    return calculateRiskReturnComparison(this.investmentAmount(), this.riskLevel(), this.years());
  });

  chartData = computed<VizDataPoint[]>(() => {
    const data = this.riskData();
    return [
      { label: 'Pessimistic Case', value: data.pessimisticValue },
      { label: 'Expected Case', value: data.expectedValue },
      { label: 'Optimistic Case', value: data.optimisticValue }
    ];
  });
}
