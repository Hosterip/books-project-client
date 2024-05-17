import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {authTypes} from "../../shared/constants/authTypes";
import {userActions} from "../../state/user/user.actions";
import {IUser} from "../../shared/interfaces/IUser";
import { Store } from '@ngrx/store';
import { AppState } from "../../state/app.state";

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [
        RouterOutlet,
        NgIf,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss'
})
export class AuthComponent {
    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private store: Store<AppState>) {
        this.route.params.subscribe(params => {
            this.type = params['type']?.toLowerCase()
            if (this.type == authTypes.login || this.type == authTypes.register) return
            this.router.navigate(['/auth', 'login'])
        });
        this.authService = authService;
    }

    type!: string
    authFormGroup: FormGroup = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

    onSubmit() {
        const observerOrNext = {
            next: (res: IUser) => {
                this.store.dispatch(userActions.createUser({user: res}));
            },
            error: (err: any) => {
                console.log(err)
            }
        }
        if (this.type == authTypes.login) {
            this.authService.login(this.authFormGroup.value.username, this.authFormGroup.value.password)
                .subscribe(observerOrNext)
        } else if (this.type == authTypes.register) {
            this.authService.register(this.authFormGroup.value.username, this.authFormGroup.value.password)
                .subscribe(observerOrNext)
        }
    }
}
