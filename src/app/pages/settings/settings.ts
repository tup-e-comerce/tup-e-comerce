import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  constructor(private authService: AuthService) { }

  getUser() {
    return this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}