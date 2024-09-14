import {Component, Input} from '@angular/core';
import {IBook} from "../../../shared/interfaces/IBook";
import {environment} from "../../../../environments/environments";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input({ required: true }) book: IBook | null = null;
  protected readonly environment = environment;
  ngOnInit(): void {
    console.log(this.book?.coverName)
  }
}