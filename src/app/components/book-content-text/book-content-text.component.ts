import { Component } from '@angular/core';

import { BookList } from '../../data/book.list';

@Component({
  selector: 'app-book-content-text',
  templateUrl: './book-content-text.component.html',
  styleUrl: './book-content-text.component.scss'
})
export class BookContentTextComponent {
  BookList = BookList
}
