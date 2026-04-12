import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Progress } from './progress';
import { ProgressService } from '../../core/services/progress.service';
import { QuizPersistenceService } from '../../core/services/quiz-persistence.service';

describe('Progress', () => {
  let component: Progress;
  let fixture: ComponentFixture<Progress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progress],
      providers: [
        provideRouter([]),
        ProgressService,
        { provide: QuizPersistenceService, useValue: { getAllMastery: vi.fn().mockResolvedValue([]) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
