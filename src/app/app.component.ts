import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { AboutFormComponent } from './about-form.component';
import { PhoneFormComponent } from './phone-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    AccountComponent,
    NavbarComponent,
    RouterOutlet,
    ReactiveFormsModule,
  ],
})
export class AppComponent {
  title = 'signup-task';
}
