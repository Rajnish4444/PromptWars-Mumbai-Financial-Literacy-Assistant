import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs';
import { ModuleDetail } from './module-detail';
import { LEARNING_MODULES } from '../../../../core/data/learning-modules.data';

describe('ModuleDetail', () => {
  let component: ModuleDetail;
  let fixture: ComponentFixture<ModuleDetail>;
  let routeParams: BehaviorSubject<any>;

  beforeEach(async () => {
    routeParams = new BehaviorSubject({ get: (key: string) => LEARNING_MODULES[0].id });

    await TestBed.configureTestingModule({
      imports: [ModuleDetail, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { paramMap: routeParams.asObservable() } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create & load module', () => {
    expect(component).toBeTruthy();
    expect(component.module()?.id).toBe(LEARNING_MODULES[0].id);
  });

  it('should correctly evaluate understanding check', () => {
    const mod = component.module();
    expect(mod).toBeDefined();
    
    // Test correct answer
    component.selectedAnswerIndex.set(mod!.understandingCheck.correctOptionIndex);
    component.submitCheck();
    expect(component.isCorrect).toBe(true);
    expect(component.isSubmitted()).toBe(true);

    // Test incorrect answer
    component.resetCheck();
    component.selectedAnswerIndex.set(mod!.understandingCheck.correctOptionIndex === 0 ? 1 : 0);
    component.submitCheck();
    expect(component.isCorrect).toBe(false);
  });
});
