import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    children: [],
  },
];
