import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { calculateInflationImpact } from '../../../../core/domain/simulators.logic';
import { DataVizFallback, VizDataPoint } from '../../../../shared/components/data-viz-fallback/data-viz-fallback';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inflation-simulator',
  imports: [CommonModule, FormsModule, MatCardModule, MatSliderModule, MatIconModule, MatButtonModule, RouterModule, DataVizFallback],
  templateUrl: './inflation-simulator.html',
  styleUrl: './inflation-simulator.scss',
})
export class InflationSimulator {
  initialValue = signal(10000);
  inflationRate = signal(3); // Historical average is roughly 3%
  years = signal(10);

  impactData = computed(() => {
    return calculateInflationImpact(this.initialValue(), this.inflationRate(), this.years());
  });

  chartData = computed<VizDataPoint[]>(() => {
    const data = this.impactData();
    const totalYears = this.years();
    const step = totalYears > 15 ? Math.ceil(totalYears / 8) : 1;
    
    return data
      .filter(d => d.year === 0 || d.year === totalYears || d.year % step === 0)
      .map(d => ({
        label: `Year ${d.year}`,
        value: d.value
      }));
  });
}
