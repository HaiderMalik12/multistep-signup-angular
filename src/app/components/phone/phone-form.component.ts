import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';

@Component({
  selector: 'app-phone-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, PhoneMaskDirective, NgFor],
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.css',
})
export class PhoneFormComponent {
  countryCodes: string[] = ['+92', '+1', '+94', '+37'];
  default: string = '+1';
  phoneForm = this.formBuilder.group({
    phone: ['', Validators.required],
    countryCode: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.phoneForm.controls['countryCode'].setValue(this.default, {
      onlySelf: true,
    });
  }

  get form() {
    return this.phoneForm.controls;
  }

  onSubmit() {
    console.warn(this.phoneForm.value);

    if (this.phoneForm.value.phone?.length == 17) {
      this.router.navigate(['/details']);
    } else {
      alert('Phone number is not correct');
      return;
    }
  }
}
