import {HttpHeaders} from "@angular/common/http";


export function getDefaultOptions (): {headers: HttpHeaders, withCredentials: boolean} {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  }
}
