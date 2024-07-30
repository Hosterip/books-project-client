import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {map, take} from "rxjs";
import {AppState} from "../../shared/state/app.state";
import {selectUserActiveUser} from "../../shared/state/user/user.selectors";
import {defaultRedirect} from "../../shared/utils/defaultRedirect";

export const mustBeAuthorizedGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  return store.select(selectUserActiveUser).pipe(
    take(1),
    map(user => {
      if (user == null) {
        defaultRedirect(router)
        return false
      }
      return true
    })
  )
};
