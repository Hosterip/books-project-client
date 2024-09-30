import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {authTypes} from "../../shared/constants/authTypes";
import {IUser} from "../../shared/interfaces/IUser";
import {Store} from '@ngrx/store';
import {userActions} from "../../shared/state/user/user.actions";
import {AppState} from "../../shared/state/app.state";
import {defaultRedirect} from "../../shared/utils/defaultRedirect";
import {AuthService} from "../../core/services/auth.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    RegisterComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent{
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.type = params['type']?.toLowerCase()
      if (this.type == authTypes.login || this.type == authTypes.register) return
      this.router.navigate(['/auth', 'login'])
    });
  }

  type!: string
}
