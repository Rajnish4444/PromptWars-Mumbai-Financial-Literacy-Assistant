import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-state',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './error-state.html',
  styleUrl: './error-state.scss',
})
export class ErrorState {
  @Input() title = 'Oops, something went wrong!';
  @Input() message = 'We encountered an error. Please try again.';
  @Input() actionText = 'Retry';
  @Output() action = new EventEmitter<void>();
}
