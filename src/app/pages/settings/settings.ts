import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService, AuthUser } from '../../services/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  user = signal<AuthUser | null>(null);

  constructor(private authService: AuthService) {
    onAuthStateChanged(getAuth(), (firebaseUser) => {
      if (firebaseUser) {
        this.user.set({
          displayName: firebaseUser.displayName ?? 'Usuario',
          email: firebaseUser.email ?? ''
        });
      } else {
        this.user.set(null);
      }
    });
  }

  getUser() {
    return this.user();
  }

  logout() {
    this.authService.logout();
  }
}