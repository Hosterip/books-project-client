import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/state/app.state";
import {AuthService} from "../../../core/services/auth.service";
import {IUser} from "../../../shared/interfaces/IUser";
import {userActions} from "../../../shared/state/user/user.actions";
import {defaultRedirect} from "../../../shared/utils/defaultRedirect";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {  }

  registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required, Validators.email]),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
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
    this.authService.register(
      this.registerFormGroup.value.email,
      this.registerFormGroup.value.firstName,
      this.registerFormGroup.value.middleName,
      this.registerFormGroup.value.lastName,
      this.registerFormGroup.value.password)
      .subscribe(observerOrNext)
  }
}
