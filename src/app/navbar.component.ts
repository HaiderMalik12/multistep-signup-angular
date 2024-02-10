import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <header class="d-flex justify-content-between align-items-center">
      <div>
        <a href="" class="logo-text text-white"> <b>HiMenus</b> for Business</a>
      </div>
      <div
        class="language-switcher d-flex align-items-center justify-content-center"
      >
        <img src="./assets/images/World.png" alt="" srcset="" />
        <img
          src="./assets/images/upper.png"
          class="upper_icon"
          alt=""
          srcset=""
        />
      </div>
    </header>
  `,
  styles: `
  header {
    background-color: #111111;
    height: 64px;
    padding: 0 61px;
}

.logo-text {
    font-size: 21px;
    line-height: 0;
    text-decoration: none;
}

.language-switcher {
    width: 80px;
    cursor: pointer;
    height: 36px;
    border-radius: 30px;
    background-color: #343434;
}
  `,
})
export class NavbarComponent {}
