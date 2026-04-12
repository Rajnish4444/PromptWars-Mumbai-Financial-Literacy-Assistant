import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LearningModule } from '../../../../core/models/learning.model';

@Component({
  selector: 'app-module-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './module-card.html',
  styleUrl: './module-card.scss',
})
export class ModuleCard {
  @Input({ required: true }) module!: LearningModule;
}
