import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {map, Observable, take} from "rxjs";
import {AppState} from "../../shared/state/app.state";
import {selectUserActiveUser} from "../../shared/state/user/user.selectors";
import {defaultRedirect} from "../../shared/utils/defaultRedirect";

export const mustNotBeAuthorizedGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  return store.select(selectUserActiveUser).pipe(
    take(1),
    map(user => {
      if (user != null) {
        defaultRedirect(router)
        return false
      }
      return true
    })
  )
};
