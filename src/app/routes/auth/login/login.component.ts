import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {IUser} from "../../../shared/interfaces/IUser";
import {userActions} from "../../../shared/state/user/user.actions";
import {defaultRedirect} from "../../../shared/utils/defaultRedirect";
import {authTypes} from "../../../shared/constants/authTypes";
import {AuthService} from "../../../core/services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/state/app.state";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {  }

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  onSubmit() {
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
