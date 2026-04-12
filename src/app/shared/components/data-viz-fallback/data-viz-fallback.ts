import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface VizDataPoint {
  label: string | number;
  value: number;
  secondaryValue?: number;
}

@Component({
  selector: 'app-data-viz-fallback',
  imports: [CommonModule],
  templateUrl: './data-viz-fallback.html',
  styleUrl: './data-viz-fallback.scss',
})
export class DataVizFallback {
  @Input({ required: true }) set data(value: VizDataPoint[]) {
    this._data.set(value);
  }
  
  @Input() valueLabel: string = 'Value';
  @Input() secondaryValueLabel: string = 'Secondary Value';
  @Input() formatAsCurrency: boolean = true;

  private _data = signal<VizDataPoint[]>([]);

  computedData = computed(() => this._data());

  maxValue = computed(() => {
    const data = this._data();
    if (data.length === 0) return 1; // Prevent div by 0
    let max = 0;
    for (const point of data) {
      if (point.value > max) max = point.value;
      if (point.secondaryValue && point.secondaryValue > max) max = point.secondaryValue;
    }
    return max === 0 ? 1 : max;
  });

  getHeight(val: number): string {
    const percentage = (val / this.maxValue()) * 100;
    return `${Math.max(1, percentage)}%`; // Keep at least 1% so zero isn't completely invisible
  }
}
