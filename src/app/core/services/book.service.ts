import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IBook} from "../../shared/interfaces/IBook";
import {IPaginated} from "../../shared/interfaces/IPaginated";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {bookEndpoints} from "../../shared/API/Endpoints/bookEndpoints";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getMany (
    page: number = 1,
    limit: number = 10,
    query?: string | null,
    userId?: number | null
  ) {
    const options = getDefaultOptions();

    const params = new HttpParams()
    params.appendAll({
      page: page,
      limit: limit,
    })
    if(query)
      params.append("query", query)
    if(userId)
      params.append("userId", userId)
    return this.http.get<IPaginated<IBook>>(bookEndpoints.getMany, {
      ...options,
      params
    })
      .pipe(catchError(handleHttpError))
  }
  getSingle (
    bookId: string
  ) {
    const options = getDefaultOptions();

    return this.http.get<IBook>(bookEndpoints.getSingle(bookId), {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  postBook (
    title: string,
    description: string,
    genreIds: string[],
    cover: File
  ) {
    const options = getDefaultOptions();
    const body = {
      title,
      description,
      genreIds,
      cover
    }
    return this.http.post<IBook>(bookEndpoints.postBook, body, {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  update (
    id: string,
    title: string,
    description: string,
    genreIds: string[],
    cover: File
  ) {
    const options = getDefaultOptions();
    const body = {
      id,
      title,
      description,
      genreIds,
      cover
    }
    return this.http.put<IBook>(bookEndpoints.update, body, {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  delete (
    id: string,
  ) {
    const options = getDefaultOptions();
    return this.http.delete<string>(bookEndpoints.delete(id), {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }
}
