import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SavingsSimulator } from './savings-simulator';

describe('SavingsSimulator', () => {
  let component: SavingsSimulator;
  let fixture: ComponentFixture<SavingsSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsSimulator],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reactively recalculate savings when slider inputs change', () => {
    // Initial State checks
    expect(component.initialAmount()).toBe(500);
    expect(component.monthlyContribution()).toBe(50);
    
    // Simulate User Input Changes
    component.initialAmount.set(1000);
    component.monthlyContribution.set(200);
    component.years.set(5);

    // Verify Reactive Chart Data updates organically without DOM cycles
    const latestData = component.chartData();
    expect(latestData.length).toBeGreaterThan(0);
    const finalYear = latestData[latestData.length - 1];
    
    // 1000 initial + (200 * 12 * 5) = 13000
    expect(finalYear.value).toBe(13000);
    expect(finalYear.label).toBe('Year 5');
  });
});
