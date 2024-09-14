import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {IBook} from "../../shared/interfaces/IBook";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IPaginated} from "../../shared/interfaces/IPaginated";
import {IBookshelf} from "../../shared/interfaces/IBookshelf";
import {DefaultBookshelfNames} from "../../shared/enums/DefaultBookshelfNames";

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {

  constructor(private http: HttpClient) { }

  GetBookshelves(userId: string) {
    const options = getDefaultOptions();
    return this.http.get<IBookshelf[]>(`bookshelves/${userId}`,{
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  GetBooks(bookshelfId: string, page: number = 1, limit: number = 10) {
    const params = new HttpParams();
    params.append("page", page);
    params.append("limit", limit);
    const options = getDefaultOptions(params);
    return this.http.get<IPaginated<IBook>>(`bookshelves/books/${bookshelfId}`, {
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  CreateBookshelf(name: string) {
    const options = getDefaultOptions();
    return this.http.post<IBookshelf>(`bookshelves/createBookshelf/${name}`,{},{
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  AddBook(bookshelfId: string, bookId: string) {
    const options = getDefaultOptions();
    const body = {
      bookshelfId,
      bookId
    }
    return this.http.post<string>(`bookshelves/addBook`, body,{
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  AddBookToDefaultBookshelf(bookshelfName: DefaultBookshelfNames, bookId: string) {
    const options = getDefaultOptions();
    const body = {
      bookshelfName,
      bookId
    }
    return this.http.post<string>(`bookshelves/addBookToDefaultBookshelf`, body,{
      ...options
    })
      .pipe(catchError(handleHttpError))
  }

  removeBook(bookshelfId: string, bookId: string) {
    const options = getDefaultOptions();
    const body = {
      bookshelfId,
      bookId
    }
    return this.http.delete<string>(`bookshelves/removeBook`, {
      ...options,
      body
    }
      )
      .pipe(catchError(handleHttpError))
  }

  removeBookToDefaultBookshelf(bookshelfName: DefaultBookshelfNames, bookId: string) {
    const options = getDefaultOptions();
    const body = {
      bookshelfName,
      bookId
    }
    return this.http.delete<string>(`bookshelves/removeBookFromDefaultBookshelf`,{
      ...options,
      body
    })
      .pipe(catchError(handleHttpError))
  }
}
