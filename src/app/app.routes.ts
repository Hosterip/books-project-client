import {Routes} from '@angular/router';
import {provideState} from "@ngrx/store";
import {AuthComponent} from "./routes/auth/auth.component";
import {userReducer} from "./shared/state/user/user.reducer";
import {BooksComponent} from "./routes/books/books.component";
import {mustNotBeAuthorizedGuard} from "./core/guards/must-not-be-authorized.guard";
import {BookComponent} from "./routes/book/book.component";

export const routes: Routes = [
    {
        path: 'auth/:type',
        component: AuthComponent,
        providers: [
            provideState({name: 'user', reducer: userReducer})
        ],
        canActivate: [mustNotBeAuthorizedGuard]
    },
    {
        path: 'books',
        component: BooksComponent,
    },
    {
        path: 'books/:bookId',
        component: BookComponent,
    }
];
