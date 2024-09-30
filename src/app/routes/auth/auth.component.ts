import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {authTypes} from "../../shared/constants/authTypes";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    RouterLink,
    LoginComponent,
    RegisterComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  encapsulation: ViewEncapsulation.None
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
