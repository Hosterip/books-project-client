import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IUser} from "../../shared/interfaces/IUser";
import {IPaginated} from "../../shared/interfaces/IPaginated";

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
  }

  getMany (
    page: number = 1,
    limit: number = 10,
    query?: string | null,
  ) {
    const options = getDefaultOptions();

    const params = new HttpParams()
    params.appendAll({
      page: page,
      limit: limit,
    })
    if(query)
      params.append("query", query)
    return this.http.get<IPaginated<IUser>>('users/many', {
      ...options,
      params
    })
      .pipe(catchError(handleHttpError))
  }

  getSingle (userId: string) {
    const options = getDefaultOptions();

    const params = new HttpParams()
    params.appendAll({
      id: userId,
    })
    return this.http.get<IUser>('users/single', {
      ...options,
      params
    })
      .pipe(catchError(handleHttpError))
  }

  deleteUser () {
    const options = getDefaultOptions();

    return this.http.delete<string>('users', {
      ...options,
    })
      .pipe(catchError(handleHttpError))
  }

  updateUsername (newUsername: string) {
    const options = getDefaultOptions();
    const body = {
      newUsername
    }
    return this.http.put<string>('users/username', body, {
      ...options,
    })
      .pipe(catchError(handleHttpError))
  }

  insertAvatar (avatar: File) {
    const options = getDefaultOptions();
    const body = {
      image: avatar
    }
    return this.http.put<IUser>('users/avatar', body, {
      ...options,
    })
      .pipe(catchError(handleHttpError))
  }
}
