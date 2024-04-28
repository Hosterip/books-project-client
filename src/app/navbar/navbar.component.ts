import { Component } from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonComponent,
    ThemeSwitcherComponent,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
