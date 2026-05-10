import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent {
  appName = 'Clocknails';
  appVersion = '1.0.0';
  userAgent = navigator.userAgent;

  user = {
    name: 'Florencia Gómez',
    email: 'florencia@clocknails.com',
    role: 'Administradora',
    avatar: 'assets/logo_clocknails.png'
  };

  showLogoutConfirm = false;

  constructor(private authService: AuthService) { }

  confirmLogout(): void {
    this.showLogoutConfirm = true;
  }

  cancelLogout(): void {
    this.showLogoutConfirm = false;
  }

  logout(): void {
    this.authService.logout();
  }
}