import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';

@Component({
  selector: 'app-phone-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, PhoneMaskDirective],
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.css',
})
export class PhoneFormComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  phoneForm = this.formBuilder.group({
    phone: [
      '',
      // Validators.required,
      // Validators.minLength(10),
      // Validators.maxLength(10),
      // Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ],
    countryCode: ['', Validators.required],
  });

  get m() {
    return this.phoneForm.controls;
  }

  numberOnly(e: any) {
    const regex = new RegExp('^[0-9]+$');
    const str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  onSubmit() {
    console.warn(this.phoneForm.value);
    this.router.navigate(['/details']);
  }
}
