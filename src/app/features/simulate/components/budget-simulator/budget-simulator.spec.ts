import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BudgetSimulator } from './budget-simulator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BudgetSimulator', () => {
  let component: BudgetSimulator;
  let fixture: ComponentFixture<BudgetSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSimulator, NoopAnimationsModule],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create & show default split', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement;
    
    // Default 4000 income, needs should be 2000
    expect(component.monthlyIncome()).toBe(4000);
    expect(component.budgetSplit().needs).toBe(2000);
    expect(component.budgetSplit().wants).toBe(1200);
    expect(component.budgetSplit().savings).toBe(800);
  });

  it('should reactively update when income changes', () => {
    component.monthlyIncome.set(10000);
    fixture.detectChanges();

    // Signal computed value updates dynamically!
    expect(component.budgetSplit().needs).toBe(5000);
    expect(component.budgetSplit().savings).toBe(2000);
  });
});
