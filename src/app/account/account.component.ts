import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  constructor(private formBuilder: FormBuilder) {}
  signupForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  show: boolean = false;

  onSubmit() {
    console.warn(this.signupForm.value);
  }
  password() {
    this.show = !this.show;
  }
}
