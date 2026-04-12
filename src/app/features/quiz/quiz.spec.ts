import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Quiz } from './quiz';
import { QuizPersistenceService } from '../../core/services/quiz-persistence.service';
import { AuthService } from '../../core/services/auth.service';

describe('Quiz', () => {
  let component: Quiz;
  let fixture: ComponentFixture<Quiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz],
      providers: [
        provideRouter([]),
        { provide: QuizPersistenceService, useValue: {} },
        { provide: AuthService, useValue: { currentUserId: '123' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
