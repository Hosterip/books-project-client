import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IBook} from "../../shared/interfaces/IBook";
import {IPaginated} from "../../shared/interfaces/IPaginated";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";

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
    return this.http.get<IPaginated<IBook>>('books/many', {
      ...options,
      params
    })
      .pipe(catchError(handleHttpError))
  }
  getSingle (
    bookId: string
  ) {
    const options = getDefaultOptions();

    return this.http.get<IBook>(`books/single/${bookId}`, {
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
    return this.http.post<IBook>(`books`, body, {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  updateBook (
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
    return this.http.put<IBook>(`books`, body, {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  deleteBook (
    id: string,
  ) {
    const options = getDefaultOptions();
    return this.http.delete<string>(`books/${id}`, {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }
}
