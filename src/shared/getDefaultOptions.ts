import {HttpHeaders} from "@angular/common/http";

export type defaultOptions = {
  headers: HttpHeaders,
  redirect: string
}

export function getDefaultOptions (): defaultOptions {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    redirect: 'follow'
  }
}
