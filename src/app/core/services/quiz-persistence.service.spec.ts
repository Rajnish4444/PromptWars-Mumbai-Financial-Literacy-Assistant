import { TestBed } from '@angular/core/testing';
import { QuizPersistenceService } from './quiz-persistence.service';
import { Firestore } from '@angular/fire/firestore';
import { Analytics } from '@angular/fire/analytics';
import { AuthService } from './auth.service';

describe('QuizPersistenceService', () => {
  let service: QuizPersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizPersistenceService,
        { provide: Firestore, useValue: {} },
        { provide: Analytics, useValue: {} },
        { provide: AuthService, useValue: { currentUserId: 'test-user-123' } }
      ]
    });
    service = TestBed.inject(QuizPersistenceService);
  });

  it('should be created and inject safely without live firebase environment', () => {
    expect(service).toBeTruthy();
  });
});
