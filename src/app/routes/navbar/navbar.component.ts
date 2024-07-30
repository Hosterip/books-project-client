import {Component} from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/state/app.state";
import {NgIf} from "@angular/common";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonComponent,
    ThemeSwitcherComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    public store: Store<AppState>,
    public authService: AuthService
  ) {}
}
