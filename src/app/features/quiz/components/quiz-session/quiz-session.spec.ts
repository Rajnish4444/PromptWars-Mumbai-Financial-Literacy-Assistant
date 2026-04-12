import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { QuizSession } from './quiz-session';
import { QuizPersistenceService } from '../../../../core/services/quiz-persistence.service';
import { AuthService } from '../../../../core/services/auth.service';

describe('QuizSession', () => {
  let component: QuizSession;
  let fixture: ComponentFixture<QuizSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSession],
      providers: [
        provideRouter([{ path: 'quiz', component: QuizSession }]),
        { provide: QuizPersistenceService, useValue: { saveAttempt: vi.fn() } },
        { provide: AuthService, useValue: { currentUserId: '123' } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
