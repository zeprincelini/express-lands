import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { LoginGuardGuard } from './login-guard/login-guard.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardGuard], component: DashboardComponent },
  { path: 'login', canActivate: [LoginGuardGuard], component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
