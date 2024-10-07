import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../core/services/book.service";
import {IBook} from "../../shared/interfaces/IBook";

@Component({
    selector: 'app-book',
    standalone: true,
    imports: [],
    templateUrl: './book.component.html',
    styleUrl: './book.component.scss'
})
export class BookComponent {
    bookId: string | null = this.route.snapshot.paramMap.get('bookId');
    book!: IBook;

    constructor(
        private route: ActivatedRoute,
        private bookService: BookService,
    ) {
    }

    ngOnInit() {
        const observerOrNext = {
            next: (res: IBook) => {
                console.log(res)
                this.book = res;
            },
            error: (err: any) => {
                console.log(err)
            }
        }
        this.bookService.getSingle(this.bookId!)
            .subscribe(observerOrNext)
    }
}
