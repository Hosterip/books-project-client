import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BookshelfService} from "../../../core/services/bookshelf.service";
import {DefaultBookshelfNames} from "../../enums/DefaultBookshelfNames";

@Component({
  selector: 'app-small-want-to-read-button',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './small-want-to-read-button.component.html',
  styleUrl: './small-want-to-read-button.component.scss',
})
export class SmallWantToReadButtonComponent {
  @Input({required: true}) bookId: string = ''
  isOpen:boolean = false;

  constructor(private bookshelfService: BookshelfService) {  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  addToBookshelf(bookshelf: DefaultBookshelfNames) : void {
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
}
