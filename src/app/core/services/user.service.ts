import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IUser} from "../../shared/interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetCurrentUser() {
    const options = getDefaultOptions();
    return this.http.get<IUser>(`users`,{
      ...options
    })
      .pipe(catchError(handleHttpError))
  }}
