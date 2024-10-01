import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {IUser} from "../../../shared/interfaces/IUser";
import {userActions} from "../../../shared/state/user/user.actions";
import {defaultRedirect} from "../../../shared/utils/defaultRedirect";
import {AuthService} from "../../../core/services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/state/app.state";
import {AuthFormComponent} from "../auth-form/auth-form.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink,
        AuthFormComponent
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) {
    }

    loginFormGroup: FormGroup = new FormGroup({})

    onSubmit() {
        console.log(this.loginFormGroup);
        if (this.loginFormGroup && this.loginFormGroup.value.username && this.loginFormGroup.value.password) {
            const observerOrNext = {
                next: (res: IUser) => {
                    this.store.dispatch(userActions.createUser({user: res}));
                    defaultRedirect(this.router)
                },
                error: (err: any) => {
                    console.log(err)
                }
            }
            this.authService.login(this.loginFormGroup.value.username, this.loginFormGroup.value.password)
                .subscribe(observerOrNext)
        }
    }
}
