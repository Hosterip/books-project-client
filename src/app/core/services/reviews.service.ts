import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {IGenre} from "../../shared/interfaces/IGenre";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IPaginated} from "../../shared/interfaces/IPaginated";
import {IReview} from "../../shared/interfaces/IReview";
import {IBook} from "../../shared/interfaces/IBook";
import {reviewEndpoints} from "../../shared/API/Endpoints/reviewEndpoints";

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {

    constructor(private http: HttpClient) {
    }

    getMany(
        bookId: string,
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
        if (query)
            params.append("query", query)
        return this.http.get<IPaginated<IReview>>(reviewEndpoints.getMany + bookId, {
            ...options,
            params
        })
            .pipe(catchError(handleHttpError))
    }

    create(
        bookId: number,
        body: string,
        rating: string
    ) {
        const options = getDefaultOptions();
        const reqBody = {
            bookId,
            body,
            rating,
        }

        return this.http.post<IReview>(reviewEndpoints.create, reqBody, {
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }

    update(
        reviewId: number,
        body: string,
        rating: number
    ) {
        const options = getDefaultOptions();
        const reqBody = {
            reviewId,
            body,
            rating,
        }

        return this.http.post<IReview>(reviewEndpoints.update, reqBody, {
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }

    delete() {
        const options = getDefaultOptions();

        return this.http.delete<string>(reviewEndpoints.delete, {
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }
}
