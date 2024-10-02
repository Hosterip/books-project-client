import {Component, inject, Input} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'auth-form',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './auth-form.component.html',
    styleUrl: './auth-form.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, {skipSelf: true}),
        }
    ]
})
export class AuthFormComponent {
    @Input({required: true}) type!: 'register' | 'login';
    @Input({required: true}) form!: FormGroup;

    ngOnInit(): void {
        console.log(this.form)
        if (this.type == 'login') {
            this.form.addControl('email',
                new FormControl('', [Validators.required, Validators.email]))
            this.form.addControl('password',
                new FormControl('', [Validators.required]))
        }
        if (this.type == 'register') {
            this.form.addControl('email',
                new FormControl('', [Validators.required, Validators.email]))
            this.form.addControl('password',
                new FormControl('', [Validators.required]))
            this.form.addControl('firstName',
                new FormControl('', [Validators.required]))
            this.form.addControl('middleName',
                new FormControl(''))
            this.form.addControl('lastName',
                new FormControl(''))

        }
    }
}
