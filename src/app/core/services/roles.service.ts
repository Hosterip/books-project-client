import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getDefaultOptions} from "../../shared/API/getDefaultOptions";
import {catchError} from "rxjs";
import {handleHttpError} from "../../shared/utils/handleHttpError";
import {IRole} from "../../shared/interfaces/IRole";
import {roleEndpoints} from "../../shared/API/Endpoints/roleEndpoints";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

    constructor(private http: HttpClient) { }

    public GetRoles() {
        const options = getDefaultOptions();

        return this.http.get<IRole[]>(roleEndpoints.getRoles, {
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }

    public UpdateUserRole(userId: string, role: string) {
        const options = getDefaultOptions();

        const body = {
            userId,
            role
        }

        return this.http.put<string>(roleEndpoints.updateUserRole, body,{
            ...options,
        })
            .pipe(catchError(handleHttpError))
    }
}
