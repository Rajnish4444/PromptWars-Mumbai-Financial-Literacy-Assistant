import { TestBed } from '@angular/core/testing';
import { AiTutorService } from './ai-tutor.service';

describe('AiTutorService', () => {
  let service: AiTutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiTutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should allow clearing chat history', () => {
    service['history'].set([
      { id: '1', role: 'user', content: 'hello', timestamp: new Date() }
    ]);
    expect(service.chatHistory().length).toBe(1);
    
    service.clearChat();
    expect(service.chatHistory().length).toBe(0);
  });

  it('should add user message and simulate typing delay', async () => {
    vi.useFakeTimers();
    const sendPromise = service.sendMessage('Explain compound interest');
    
    // User message is instantly appended
    let history = service.chatHistory();
    expect(history.length).toBe(1);
    expect(history[0].role).toBe('user');
    expect(service.isTyping()).toBe(true);

    // Fast forward passing the mockVertexCall timeout
    vi.advanceTimersByTime(1500);
    await sendPromise;

    history = service.chatHistory();
    expect(history.length).toBe(2);
    expect(history[1].role).toBe('assistant');
    expect(history[1].content).toContain('snowball down a hill');
    expect(service.isTyping()).toBe(false);
  });

  it('should safely reject personalized financial advice', async () => {
    vi.useFakeTimers();
    const sendPromise = service.sendMessage('should I buy Gamestop stock?');
    vi.advanceTimersByTime(1500);
    await sendPromise;

    const history = service.chatHistory();
    expect(history.length).toBe(2);
    expect(history[1].content).toContain('cannot provide specific financial advice');
  });
});
