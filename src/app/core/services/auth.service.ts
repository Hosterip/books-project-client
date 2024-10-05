import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {IUser} from "../../shared/interfaces/IUser";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/state/app.state";
import {selectUserActiveUser} from "../../shared/state/user/user.selectors";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private store: Store<AppState>) {
    }

    get isAuthorized() {
        let isAuth: boolean = false
        this.store.select(selectUserActiveUser).subscribe({
            next: value => {
                isAuth = value != null
            },
        })
        return isAuth
    }

    public register(email: string, firstName: string, middleName: string, lastName: string, password: string): Observable<IUser> {
        const options = getDefaultOptions()
        const body = {
            email: email,
            firstName,
            middleName,
            lastName,
            password,
        }

        return this.http.post<IUser>('auth/register', body, options)
            .pipe(catchError(handleHttpError))
    }

    public login(email: string, password: string): Observable<IUser> {
        const options = getDefaultOptions()
        const body = {
            email,
            password
        }

        return this.http.post<IUser>('auth/login', body, options)
            .pipe(catchError(handleHttpError))
    }
}
