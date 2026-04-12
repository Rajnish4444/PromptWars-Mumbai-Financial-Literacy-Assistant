import { Component, signal } from '@angular/core';
import { LEARNING_MODULES } from '../../core/data/learning-modules.data';
import { ModuleCard } from './components/module-card/module-card';

@Component({
  selector: 'app-learn',
  imports: [ModuleCard],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  modules = signal(LEARNING_MODULES);
}
