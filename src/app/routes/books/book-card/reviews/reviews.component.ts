import {Component, Input} from '@angular/core';
import {ReviewsService} from "../../../../core/services/reviews.service";
import {IPaginated} from "../../../../shared/interfaces/IPaginated";
import {IBook} from "../../../../shared/interfaces/IBook";
import {IReview} from "../../../../shared/interfaces/IReview";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
    @Input() bookId!: string
    page = 1;
    private reviews!: IPaginated<IReview>;
    constructor(private reviewsService: ReviewsService) {}

    ngOnInit(): void {
        const observerOrNext = {
            next: (res: IPaginated<IReview>) => {
                this.reviews = res
                console.log(res)
            },
            error: (err: any) => {
                console.log(err)
            }
        }
        this.reviewsService.getMany(this.bookId, this.page)
    }
}
