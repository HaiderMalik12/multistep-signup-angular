import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AccountComponent, RouterOutlet, ReactiveFormsModule],
})
export class AppComponent {
  title = 'signup-task';
}
