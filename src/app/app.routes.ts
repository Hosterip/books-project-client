import {Routes} from '@angular/router';
import {provideState} from "@ngrx/store";
import {AuthComponent} from "./routes/auth/auth.component";
import {userReducer} from "./shared/state/user/user.reducer";

export const routes: Routes = [
  {
    path: 'auth/:type',
    component: AuthComponent,
    providers: [
      provideState({ name: 'user', reducer: userReducer })
    ]
  }
];
