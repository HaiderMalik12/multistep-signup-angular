import { Routes } from '@angular/router';
import { AboutFormComponent } from './about/about-form.component';
import { AccountComponent } from './account/account.component';
import { PhoneFormComponent } from './phone/phone-form.component';
import { CodeFormComponent } from './code/code-form.component';
import { BDetailsFormComponent } from './b-details/b-details-form.component';
import { PricingPlanComponent } from './pricing/pricing-plan.component';

export const routes: Routes = [
  { path: 'home', component: AccountComponent },
  { path: 'about', component: AboutFormComponent },
  { path: 'phone', component: PhoneFormComponent },
  { path: 'details', component: BDetailsFormComponent },
  { path: 'code', component: CodeFormComponent },
  { path: 'pricing', component: PricingPlanComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
