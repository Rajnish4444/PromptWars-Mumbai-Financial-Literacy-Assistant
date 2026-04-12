import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiTutor } from './ai-tutor';
import { AiTutorService } from '../../core/services/ai-tutor.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AiTutor', () => {
  let component: AiTutor;
  let fixture: ComponentFixture<AiTutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTutor, NoopAnimationsModule],
      providers: [AiTutorService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTutor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create & show empty state initially', () => {
    expect(component).toBeTruthy();
    expect(component.tutorService.chatHistory().length).toBe(0);
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.empty-state')).toBeTruthy();
  });

  it('should not send empty messages', () => {
    vi.spyOn(component.tutorService, 'sendMessage');
    component.send('   ');
    expect(component.tutorService.sendMessage).not.toHaveBeenCalled();
  });

  it('should send a message and clear input', () => {
    vi.spyOn(component.tutorService, 'sendMessage');
    component.userInput = 'Hello';
    component.send();
    
    expect(component.tutorService.sendMessage).toHaveBeenCalledWith('Hello');
    expect(component.userInput).toBe('');
  });
});
