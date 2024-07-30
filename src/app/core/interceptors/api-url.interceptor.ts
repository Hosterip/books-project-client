import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable, Provider} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environments";


@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({url: `${environment.apiUrl}/${req.url}`})
    return next.handle(apiReq);
  }
}

export const apiUrlInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiUrlInterceptor,
  multi: true
};
