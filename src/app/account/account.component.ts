import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {}
