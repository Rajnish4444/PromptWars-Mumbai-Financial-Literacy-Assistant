import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { QuizList } from './quiz-list';
import { QuizPersistenceService } from '../../../../core/services/quiz-persistence.service';
import { AuthService } from '../../../../core/services/auth.service';

describe('QuizList', () => {
  let component: QuizList;
  let fixture: ComponentFixture<QuizList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizList],
      providers: [
        provideRouter([]),
        { provide: QuizPersistenceService, useValue: { getAllMastery: vi.fn().mockResolvedValue([]) } },
        { provide: AuthService, useValue: { currentUserId: '123' } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create & load topics', () => {
    expect(component).toBeTruthy();
    expect(component.topics.length).toBeGreaterThan(0);
  });
});
