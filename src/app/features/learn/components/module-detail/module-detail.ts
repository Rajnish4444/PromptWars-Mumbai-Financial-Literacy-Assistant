import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { LearningModule } from '../../../../core/models/learning.model';
import { LEARNING_MODULES } from '../../../../core/data/learning-modules.data';

@Component({
  selector: 'app-module-detail',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatRadioModule, FormsModule, RouterModule],
  templateUrl: './module-detail.html',
  styleUrl: './module-detail.scss',
})
export class ModuleDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  module = signal<LearningModule | null>(null);
  selectedAnswerIndex = signal<number | null>(null);
  isSubmitted = signal(false);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const found = LEARNING_MODULES.find(m => m.id === id);
      if (found) {
        this.module.set(found);
        this.resetCheck();
      } else {
        this.router.navigate(['/learn']);
      }
    });
  }

  submitCheck() {
    if (this.selectedAnswerIndex() !== null) {
      this.isSubmitted.set(true);
    }
  }

  resetCheck() {
    this.selectedAnswerIndex.set(null);
    this.isSubmitted.set(false);
  }

  get isCorrect(): boolean {
    const mod = this.module();
    if (!mod || this.selectedAnswerIndex() === null) return false;
    return this.selectedAnswerIndex() === mod.understandingCheck.correctOptionIndex;
  }
}
