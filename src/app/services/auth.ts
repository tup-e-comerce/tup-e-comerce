import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdSGd2cM2JemXn7ahXzyJs6bCqvMikIxw",
  authDomain: "tup-e-comerce.firebaseapp.com",
  projectId: "tup-e-comerce",
  storageBucket: "tup-e-comerce.firebasestorage.app",
  messagingSenderId: "376739417761",
  appId: "1:376739417761:web:e0821a510a273fd21baae0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) { }

  login(): Promise<void> {
    return signInWithPopup(auth, googleProvider).then(result => {
      this.currentUser = result.user;
      sessionStorage.setItem('session', 'active');
      this.router.navigate(['/items']);
    });
  }

  logout(): Promise<void> {
    return signOut(auth).then(() => {
      this.currentUser = null;
      sessionStorage.removeItem('session');
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('session') === 'active';
  }

  getUser(): User | null {
    return this.currentUser;
  }
}