import {Component} from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/state/app.state";
import {selectUserActiveUser} from "../../shared/state/user/user.selectors";

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
  constructor(private store: Store<AppState>) {
  }
  user$ = this.store.select(selectUserActiveUser)

}
