import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-b-details-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgFor],
  templateUrl: './b-details-form.component.html',
  styleUrl: './b-details-form.component.css',
})
export class BDetailsFormComponent {
  cities: string[] = ['London', 'Lahore', 'Colombo', 'Paris'];
  defaultCity: string = 'Paris';

  detailsForm = this.formBuilder.group({
    businessName: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.detailsForm.controls['city'].setValue(this.defaultCity, {
      onlySelf: true,
    });
  }

  onSubmit() {
    console.warn(this.detailsForm.value);
    this.router.navigate(['/pricing']);
  }
}
