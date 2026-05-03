import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loading = signal(false);

  constructor(private router: Router) { }

  onLogin(): void {
    this.loading.set(true);

    setTimeout(() => {
      sessionStorage.setItem('session', 'active');
      this.loading.set(false);
      this.router.navigate(['/items']);
    }, 2000);
  }
}