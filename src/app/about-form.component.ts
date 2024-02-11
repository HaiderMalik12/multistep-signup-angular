import { Component } from '@angular/core';

@Component({
  selector: 'app-about-form',
  standalone: true,
  imports: [],
  template: `
    <div class="container mt-5">
      <div class="row">
        <h2 class="about-title text-center">Tell us about yourself</h2>
      </div>
      <div class="row">
        <p class="text-center sub-title">
          Welcome! Let's get to know each other a bit better.
        </p>
      </div>
      <form>
        <div class="row align-items-center justify-content-center ms-3 me-1">
          <div class="col-md-8 col-lg-5 col-sm-12 mb-3">
            <input
              type="text"
              class="form-control"
              id="fullname"
              aria-describedby="fullname"
              placeholder="Full name"
            />
          </div>
        </div>

        <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      </form>
    </div>
  `,
  styleUrl: './about-form.component.css',
})
export class AboutFormComponent {}
