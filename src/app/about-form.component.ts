import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="container-fluid mt-5">
      <div class="row">
        <h2 class="about-title text-center">Tell us about yourself</h2>
      </div>
      <div class="row">
        <p class="text-center sub-title">
          Welcome! Let's get to know each other a bit better.
        </p>
      </div>
      <form [formGroup]="aboutForm" (ngSubmit)="onSubmit()">
        <div class="row align-items-center justify-content-center ms-3 me-1">
          <div class="col-md-8 col-lg-5 col-sm-12 mb-3">
            <input
              type="text"
              class="form-control"
              id="fullname"
              aria-describedby="fullname"
              placeholder="Full name"
              formControlName="fullname"
            />
          </div>
        </div>

        <div class="row align-items-center justify-content-center ms-3 me-1">
          <div class="col-md-8 col-lg-5 col-sm-12 mb-3">
            <select
              class="form-select"
              aria-label="Country of Registration"
              formControlName="country"
            >
              <option selected>Country of registration</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>

        <div class="row align-items-center justify-content-center ms-3 me-1">
          <div class="col-md-8 col-lg-5 col-sm-12 mb-3">
            <select
              class="form-select"
              aria-label="Where did you hear about us"
              formControlName="refer"
            >
              <option selected>Where did you hear about us</option>
              <option value="USA">Google</option>
              <option value="UK">Referral</option>
              <option value="Japan">LinkedIn</option>
            </select>
          </div>
        </div>

        <!-- <button type="submit" class="btn btn-primary">Submit</button> -->

        <div class="row gap-3 bottom-border-container">
          <div class="col bottom-border "></div>
          <div class="col bottom-border "></div>
          <div class="col bottom-border "></div>
        </div>

        <div class="row mt-3 text-center">
          <div class="col-4">
            <a class="bottom-border-back" href="/">Back</a>
          </div>
          <div class="col-4 offset-4">
            <button
              class="btn bottom-border-btn py-1 px-4"
              type="submit"
              [disabled]="!aboutForm.valid"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  `,
  styleUrl: './about-form.component.css',
})
export class AboutFormComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  aboutForm = this.formBuilder.group({
    fullname: ['', Validators.required],
    country: ['', Validators.required],
    refer: ['', Validators.required],
  });

  onSubmit() {
    console.warn(this.aboutForm.value);
    this.router.navigate(['/phone']);
  }
}
