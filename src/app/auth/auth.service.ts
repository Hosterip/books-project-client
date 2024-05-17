import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {getDefaultOptions} from "../../API/getDefaultOptions";
import {IUser} from "../../shared/interfaces/IUser";
import {handleHttpError} from "../../shared/utils/handleHttpError";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register (username: string, password: string): Observable<IUser> {
    const options = getDefaultOptions()
    const body = {
      username,
      password
    }

    return this.http.post<IUser>('auth/register', body, options)
      .pipe(catchError(handleHttpError))
  }

  public login (username: string, password: string): Observable<IUser> {
    const options = getDefaultOptions ()
    const body = {
      username,
      password
    }

    return this.http.post<IUser>('auth/login', body, options)
      .pipe(catchError(handleHttpError))
  }
}
