import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {provideState, provideStore} from "@ngrx/store";
import {apiUrlInterceptorProvider} from "./shared/API/api-url.interceptor";
import {userReducer} from "./shared/state/user/user.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState({ name: 'user', reducer: userReducer }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    apiUrlInterceptorProvider
  ]
};
