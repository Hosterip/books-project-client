import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {provideState} from "@ngrx/store";
import {userReducer} from "../state/user/user.reducer";

export const routes: Routes = [
  {
    path: 'auth/:type',
    component: AuthComponent,
    providers: [
      provideState({ name: 'user', reducer: userReducer })
    ]
  }
];
