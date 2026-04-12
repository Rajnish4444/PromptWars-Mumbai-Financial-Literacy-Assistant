import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProgressService, ProgressReport } from '../../core/services/progress.service';
import { AuthService } from '../../core/services/auth.service';
import { QUIZ_TOPICS } from '../../core/data/quiz-topics.data';

@Component({
  selector: 'app-progress',
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
})
export class Progress implements OnInit {
  private progressService = inject(ProgressService);
  public authService = inject(AuthService);
  
  report = signal<ProgressReport | null>(null);
  
  // Expose topics so template can find titles for weak mastery arrays
  topicsMap = new Map(QUIZ_TOPICS.map(t => [t.id, t]));

  async ngOnInit() {
    const data = await this.progressService.generateLearningReport('guest');
    this.report.set(data);
  }

  getTopicTitle(id: string): string {
    return this.topicsMap.get(id)?.title || 'Unknown Topic';
  }

  getTopicIcon(id: string): string {
    return this.topicsMap.get(id)?.icon || 'quiz';
  }

  async linkAccount() {
    try {
      await this.authService.upgradeToGoogleAccount();
      alert('Account linked successfully! Your data is safe permanently.');
    } catch (e) {
      alert('Failed to link account. Please try again.');
    }
  }
}
