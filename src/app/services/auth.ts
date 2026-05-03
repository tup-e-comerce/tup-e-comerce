import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) { }

  login(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        sessionStorage.setItem('session', 'active');
        this.router.navigate(['/items']);
        resolve();
      }, 2000);
    });
  }

  logout(): void {
    sessionStorage.removeItem('session');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('session') === 'active';
  }
}