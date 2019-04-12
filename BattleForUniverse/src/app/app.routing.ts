import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/components/login/login.component';

import { AuthGuard } from './shared/services/auth.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'game',
    redirectTo: '', // TODO ADD GAME COMPONENT
    canActivate: [AuthGuard]
  },
  {
      path: '**',
      redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
