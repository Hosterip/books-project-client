import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {getDefaultOptions} from "../../shared/getDefaultOptions";
import {catchError, share, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private handleError (response: HttpErrorResponse) {
    if(response.status === 0 && response.status < 500) {
      console.log('Client-side error: ', response.error)
    } else {
      console.log('Server-side error: ', response.error)
    }

    return throwError(() => new Error('Cannot fetch the data. Please try again'))
  }

  public postRegister (username: string, password: string) {
    const options = getDefaultOptions()
    const body = {
      username,
      password
    }
    console.log(body)
    return this.http.post('https://localhost:7190/auth/register', body, options)
      .pipe(share()).pipe(catchError(this.handleError))
  }
}
