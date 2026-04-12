import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-empty-state',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
})
export class EmptyState {
  @Input() icon = 'inbox';
  @Input() title = 'Nothing here yet';
  @Input() message = 'Check back later for updates.';
  @Input() actionText?: string;
  @Output() action = new EventEmitter<void>();
}
