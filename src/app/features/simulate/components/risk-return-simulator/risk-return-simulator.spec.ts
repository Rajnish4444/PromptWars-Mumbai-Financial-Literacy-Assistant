import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RiskReturnSimulator } from './risk-return-simulator';

describe('RiskReturnSimulator', () => {
  let component: RiskReturnSimulator;
  let fixture: ComponentFixture<RiskReturnSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskReturnSimulator],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskReturnSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recalculate risk bounds organically when user adjusts risk tolerance', () => {
    // Initial states
    expect(component.investmentAmount()).toBe(10000);
    expect(component.riskLevel()).toBe(5);

    // Test extreme conservative
    component.riskLevel.set(1);
    let chart = component.chartData();
    
    // Pessimistic and Optimistic should be very tight for Risk Level 1
    let pessimistic = chart.find(c => c.label === 'Pessimistic Case')!.value;
    let expected = chart.find(c => c.label === 'Expected Case')!.value;
    let optimistic = chart.find(c => c.label === 'Optimistic Case')!.value;
    expect(optimistic - pessimistic).toBeLessThan(expected); // Tight variance

    // Test extreme aggressive
    component.riskLevel.set(10);
    chart = component.chartData();
    
    pessimistic = chart.find(c => c.label === 'Pessimistic Case')!.value;
    expected = chart.find(c => c.label === 'Expected Case')!.value;
    optimistic = chart.find(c => c.label === 'Optimistic Case')!.value;
    
    expect(optimistic).toBeGreaterThan(expected * 2); // Massive variance
    expect(pessimistic).toBeLessThan(component.investmentAmount()); // Might lose money
  });
});
