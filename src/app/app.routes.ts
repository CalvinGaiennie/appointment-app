import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: '' },
];
