import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import NavbarComponent from "./routes/navbar";
import {Store} from "@ngrx/store";
import {AppState} from "./shared/state/app.state";
import {selectUserActiveUser} from "./shared/state/user/user.selectors";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  private _store: Store<AppState>;
  constructor(store: Store<AppState>) {
    this._store = store;
  }
  ngOnInit(): void {
    this._store.select(selectUserActiveUser)
  }

}
