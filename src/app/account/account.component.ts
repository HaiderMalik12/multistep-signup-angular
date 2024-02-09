import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {}
