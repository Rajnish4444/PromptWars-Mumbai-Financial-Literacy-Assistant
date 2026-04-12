import { Component, inject, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AiTutorService } from '../../core/services/ai-tutor.service';

@Component({
  selector: 'app-ai-tutor',
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './ai-tutor.html',
  styleUrl: './ai-tutor.scss',
})
export class AiTutor implements AfterViewChecked {
  public tutorService = inject(AiTutorService);
  
  userInput = '';
  
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  suggestedPrompts = [
    'Explain compound interest like I am 15',
    'What is the difference between saving and investing?',
    'Why does inflation reduce buying power?',
    'Give me 3 quiz questions on budgeting basics'
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  send(prompt: string = this.userInput) {
    if (!prompt.trim() || this.tutorService.isTyping()) return;
    
    this.tutorService.sendMessage(prompt);
    this.userInput = '';
  }

  clearChat() {
    this.tutorService.clearChat();
  }
}
