import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  notificationsEnabled = true;
  darkModeEnabled = false;
}
