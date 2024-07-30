import {Router} from "@angular/router";

export function defaultRedirect(router: Router) {
  router.navigate(['/books'])
}
