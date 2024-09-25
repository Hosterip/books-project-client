import {Component, Input} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {ButtonComponent} from "../button/button.component";
import {NgOptimizedImage} from "@angular/common";
import {BookshelfService} from "../../../core/services/bookshelf.service";
import {DefaultBookshelfNames} from "../../enums/DefaultBookshelfNames";

@Component({
  selector: 'app-big-want-to-read-button',
  standalone: true,
    imports: [
        ModalComponent,
        ButtonComponent,
        NgOptimizedImage
    ],
  templateUrl: './big-want-to-read-button.component.html',
  styleUrl: './big-want-to-read-button.component.scss'
})
export class BigWantToReadButtonComponent {
  @Input({required: true}) bookId: string = ''
  public isOpen:boolean = true;

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor(private bookshelfService: BookshelfService) {  }

  addToBookshelf(bookshelf: DefaultBookshelfNames) : void {
    if(this.bookId == '') return;
    const observerOrNext = {
      next: (res: any) => {
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    }
    this.bookshelfService.AddBookToDefaultBookshelf(bookshelf, this.bookId)
      .subscribe(observerOrNext)
  }

  protected readonly DefaultBookshelfNames = DefaultBookshelfNames;
}
