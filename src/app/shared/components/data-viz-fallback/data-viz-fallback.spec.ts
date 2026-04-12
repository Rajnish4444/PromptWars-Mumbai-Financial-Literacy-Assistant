import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataVizFallback } from './data-viz-fallback';

describe('DataVizFallback', () => {
  let component: DataVizFallback;
  let fixture: ComponentFixture<DataVizFallback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataVizFallback]
    }).compileComponents();

    fixture = TestBed.createComponent(DataVizFallback);
    component = fixture.componentInstance;
    
    // Pass mock data
    component.data = [
      { label: 'Point A', value: 50 },
      { label: 'Point B', value: 100 }
    ];
    fixture.detectChanges();
  });

  it('should calculate maxHeight accurately to keep bars proportionate', () => {
    expect(component.maxValue()).toBe(100);
    expect(component.getHeight(50)).toBe('50%');
    expect(component.getHeight(100)).toBe('100%');
  });

  it('should render structurally accessible table for screen readers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tableContainer = compiled.querySelector('.sr-only');
    expect(tableContainer).toBeTruthy();
    expect(tableContainer?.getAttribute('aria-live')).toBe('polite');
    
    const ths = compiled.querySelectorAll('th');
    expect(ths[0].textContent).toContain('Label');
    expect(ths[1].textContent).toContain('Value');

    const tds = compiled.querySelectorAll('td');
    // First row should have 'Point A' and a formatted currency string
    expect(tds[0].textContent).toContain('Point A');
  });

  it('should render visually hidden CSS chart for sighted users', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const chart = compiled.querySelector('.css-chart-container');
    
    expect(chart).toBeTruthy();
    expect(chart?.getAttribute('aria-hidden')).toBe('true');
    expect(compiled.querySelectorAll('.bar.primary').length).toBe(2);
  });
});
