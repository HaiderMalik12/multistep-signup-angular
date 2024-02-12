import { Routes } from '@angular/router';
import { AboutFormComponent } from './components/about/about-form.component';
import { AccountComponent } from './components/account/account.component';
import { PhoneFormComponent } from './components/phone/phone-form.component';
import { CodeFormComponent } from './components/code/code-form.component';
import { BDetailsFormComponent } from './components/b-details/b-details-form.component';
import { PricingPlanComponent } from './components/pricing/pricing-plan.component';

export const routes: Routes = [
  { path: 'home', component: AccountComponent },
  { path: 'about', component: AboutFormComponent },
  { path: 'phone', component: PhoneFormComponent },
  { path: 'details', component: BDetailsFormComponent },
  { path: 'code', component: CodeFormComponent },
  { path: 'pricing', component: PricingPlanComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
