import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './bottom-bar.html',
  styleUrls: ['./bottom-bar.css']
})
export class BottomBarComponent {
  private authService = inject(AuthService);

  onLogout(): void {
    this.authService.logout();
  }
}