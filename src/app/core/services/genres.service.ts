import {Injectable} from '@angular/core';
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {HttpClient} from "@angular/common/http";
import {IGenre} from "../../shared/interfaces/IGenre";
import {genreEndpoints} from "../../shared/API/Endpoints/genreEndpoints";

@Injectable({
    providedIn: 'root'
})
export class GenresService {

    constructor(private http: HttpClient) { }

    public GetGenres() {
        const options = getDefaultOptions();

        return this.http.get<IGenre[]>(genreEndpoints.getGenres, {
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }

    public PostGenre(genre:string) {
        const options = getDefaultOptions();

        return this.http.post<IGenre>(genreEndpoints.postGenre(genre), {
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }
}
