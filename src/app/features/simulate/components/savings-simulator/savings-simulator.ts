import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { calculateSavingsGrowth } from '../../../../core/domain/simulators.logic';
import { DataVizFallback, VizDataPoint } from '../../../../shared/components/data-viz-fallback/data-viz-fallback';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-savings-simulator',
  imports: [CommonModule, FormsModule, MatCardModule, MatSliderModule, MatIconModule, MatButtonModule, RouterModule, DataVizFallback],
  templateUrl: './savings-simulator.html',
  styleUrl: './savings-simulator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavingsSimulator {
  initialAmount = signal(500);
  monthlyContribution = signal(50);
  years = signal(3);

  growthData = computed(() => {
    return calculateSavingsGrowth(
      this.initialAmount(), 
      this.monthlyContribution(), 
      this.years()
    );
  });

  chartData = computed<VizDataPoint[]>(() => {
    return this.growthData().map(d => ({
      label: `Year ${d.year}`,
      value: d.value
    }));
  });
}
