import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
  { path: 'search', loadComponent: () => import('./search/search.component').then(mod => mod.SearchComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent) },
];