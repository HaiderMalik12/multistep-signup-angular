import { Component } from '@angular/core';
import { SixDigitOnlyDirective } from '../../directives/six-digit-only-directive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-code-form',
  standalone: true,
  imports: [SixDigitOnlyDirective, ReactiveFormsModule, RouterLink],
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.css'],
})
export class CodeFormComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  codeForm = this.formBuilder.group({
    code: ['', Validators.required],
  });

  onSubmit() {
    console.warn(this.codeForm.value);
    if (this.codeForm.value.code?.length == 6) {
      this.router.navigate(['/detail']);
    } else {
      alert('You have to provide your 6 digit code');
      return;
    }
  }
}
