import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ModuleCard } from './module-card';
import { LearningModule } from '../../../../core/models/learning.model';

const mockModule: LearningModule = {
  id: 'test-module',
  title: 'Test Module',
  icon: 'test',
  shortDescription: 'Test description',
  explanation: 'Test explanation',
  whyItMatters: 'Test why',
  dailyLifeExample: 'Test example',
  commonMistake: 'Test mistake',
  understandingCheck: {
    question: 'Q',
    options: ['A', 'B'],
    correctOptionIndex: 0,
    explanation: 'Exp'
  }
};

describe('ModuleCard', () => {
  let component: ModuleCard;
  let fixture: ComponentFixture<ModuleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleCard],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleCard);
    component = fixture.componentInstance;
    component.module = mockModule;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render module details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain('Test Module');
    expect(compiled.querySelector('p')?.textContent).toContain('Test description');
  });
});
