import { Component } from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-big-want-to-read-button',
  standalone: true,
  imports: [
    ModalComponent,
    ButtonComponent
  ],
  templateUrl: './big-want-to-read-button.component.html',
  styleUrl: './big-want-to-read-button.component.scss'
})
export class BigWantToReadButtonComponent {
  public isOpen:boolean = true;

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
