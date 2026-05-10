import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then(m => m.LoginComponent)
    },
    {
        path: 'items',
        loadComponent: () =>
            import('./pages/items/items').then(m => m.Items),
        canActivate: [authGuard]
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./pages/settings/settings').then(m => m.SettingsComponent),
        canActivate: [authGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];