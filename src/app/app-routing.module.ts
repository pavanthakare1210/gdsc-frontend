import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ChangePasswordComponent } from './core/change-password/change-password.component';

import { ForgotPasswordComponent } from './core/forget-password/forget-password.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {path: 'register',component:RegisterComponent},
  {path: '', redirectTo: 'forgot-password', pathMatch: 'full' },
  { path: '**', redirectTo: 'forgot-password' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
