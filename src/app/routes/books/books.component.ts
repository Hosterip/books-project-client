import {Component, OnInit} from '@angular/core';
import {BookService} from "../../core/services/book.service";
import {IBook} from "../../shared/interfaces/IBook";
import {IPaginated} from "../../shared/interfaces/IPaginated";
import {BookCardComponent} from "./book-card/book-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {
  BigWantToReadButtonComponent
} from "../../shared/components/big-want-to-read-button/big-want-to-read-button.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    BookCardComponent,
    NgForOf,
    NgIf,
    BigWantToReadButtonComponent
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService) {}

  public books?: IPaginated<IBook>

  ngOnInit(): void {
    const observerOrNext = {
      next: (res: IPaginated<IBook>) => {
        this.books = res
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    }
    this.bookService.getMany()
      .subscribe(observerOrNext)
  }


}
