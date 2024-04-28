import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', "../auth.component.scss"]
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  submit () {
    this.authService.postRegister(this.loginForm.value.username!, this.loginForm.value.password!)
      .subscribe({
        next: (data: any) => {
          console.log(data)
        },
        error: (error: any) => {
          alert(error.message)
        }
      }
    )
  }
}
