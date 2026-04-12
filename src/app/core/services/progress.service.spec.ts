import { TestBed } from '@angular/core/testing';
import { ProgressService } from './progress.service';
import { QuizPersistenceService } from './quiz-persistence.service';
import { QUIZ_TOPICS } from '../data/quiz-topics.data';

describe('ProgressService', () => {
  let service: ProgressService;
  let mockQuizService: Partial<QuizPersistenceService>;

  beforeEach(() => {
    mockQuizService = {
      getAllMastery: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ProgressService,
        { provide: QuizPersistenceService, useValue: mockQuizService }
      ]
    });
    service = TestBed.inject(ProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate safely with empty mock', async () => {
    (mockQuizService.getAllMastery as any).mockResolvedValue([]);
    const report = await service.generateLearningReport();
    expect(report.overallCompletionPercentage).toBe(0);
  });
});
