import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-app-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {
  public authService = inject(AuthService);
  isMobile = signal(false); // To be updated by a BreakpointObserver in a real app
  
  navLinks = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/learn', label: 'Learn', icon: 'school' },
    { path: '/simulate', label: 'Simulate', icon: 'bar_chart' },
    { path: '/quiz', label: 'Quiz', icon: 'quiz' },
    { path: '/ai-tutor', label: 'AI Tutor', icon: 'smart_toy' },
    { path: '/progress', label: 'Progress', icon: 'trending_up' }
  ];
}
