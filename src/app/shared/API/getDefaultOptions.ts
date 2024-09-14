import {HttpHeaders, HttpParams} from "@angular/common/http";


export function getDefaultOptions (params: HttpParams = new HttpParams()): {headers: HttpHeaders, withCredentials: boolean, params : HttpParams} {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
    params: params

  }
}
