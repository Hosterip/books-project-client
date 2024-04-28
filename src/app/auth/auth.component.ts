import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
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
    RegisterComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  type!: string
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.type = params['type']?.toLowerCase()
      if (this.type == 'register' || this.type == 'login') return
      this.router.navigate(['/auth', 'login'])
    })
  }
}
