import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth').then((m) => m.Auth),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login').then((m) => m.Login),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up').then((m) => m.SignUp),
      },
    ],
  },
];
