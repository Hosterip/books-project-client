import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import NavbarComponent from "./routes/navbar";
import {Store} from "@ngrx/store";
import {AppState} from "./shared/state/app.state";
import {selectUserActiveUser} from "./shared/state/user/user.selectors";
import {userActions} from "./shared/state/user/user.actions";
import {AuthService} from "./core/services/auth.service";
import {UserService} from "./core/services/user.service";
import {IPaginated} from "./shared/interfaces/IPaginated";
import {IBook} from "./shared/interfaces/IBook";
import {IUser} from "./shared/interfaces/IUser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  private _store: Store<AppState>;
  private _userService: UserService;
  constructor(store: Store<AppState>, userService: UserService) {
    this._store = store;
    this._userService = userService;
  }
  ngOnInit(): void {
    const observerOrNext = {
      next: (res: IUser) => {
        this._store.dispatch(userActions.createUser({user: res}));
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    }
    this._userService.GetCurrentUser().subscribe(observerOrNext)
    this._store.select(selectUserActiveUser)
  }
}
