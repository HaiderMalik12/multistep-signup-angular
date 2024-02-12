import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-b-details-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './b-details-form.component.html',
  styleUrl: './b-details-form.component.css',
})
export class BDetailsFormComponent {}
