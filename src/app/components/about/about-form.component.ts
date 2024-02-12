import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgFor],
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.css',
})
export class AboutFormComponent {
  countries: string[] = ['USA', 'UK', 'Canada', 'Dubai'];
  defaultCountry: string = 'Dubai';

  referrals: string[] = ['Google', 'LinkedIn', 'Facebook', 'Refer', 'Friend'];
  defaultReferral: string = 'Google';

  aboutForm = this.formBuilder.group({
    fullname: ['', Validators.required],
    country: ['', Validators.required],
    refer: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.aboutForm.controls['country'].setValue(this.defaultCountry, {
      onlySelf: true,
    });
    this.aboutForm.controls['refer'].setValue(this.defaultReferral, {
      onlySelf: true,
    });
  }

  onSubmit() {
    console.warn(this.aboutForm.value);
    this.router.navigate(['/phone']);
  }
}
