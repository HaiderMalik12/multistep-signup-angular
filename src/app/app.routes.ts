import { Routes } from '@angular/router';
import { AboutFormComponent } from './about-form.component';
import { AccountComponent } from './account/account.component';
import { PhoneFormComponent } from './phone-form.component';
import { CodeFormComponent } from './code-form.component';
import { BDetailsFormComponent } from './b-details-form.component';
import { PricingPlanComponent } from './pricing-plan.component';

export const routes: Routes = [
  { path: 'home', component: AccountComponent },
  { path: 'about', component: AboutFormComponent },
  { path: 'phone', component: PhoneFormComponent },
  { path: 'details', component: BDetailsFormComponent },
  { path: 'code', component: CodeFormComponent },
  { path: 'pricing', component: PricingPlanComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
