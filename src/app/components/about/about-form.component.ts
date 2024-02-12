import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-about-form',
  standalone: true,
  imports: [NgxMaskDirective, RouterLink, ReactiveFormsModule],
  templateUrl: './about-form.component.html',
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
