import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  signupForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  show: boolean = false;

  onSubmit() {
    console.warn(this.signupForm.value);
    this.router.navigate(['/about']);
  }
  passwordToggle() {
    this.show = !this.show;
  }
}
