import { Component } from '@angular/core';

import { BookList } from '../../data/book.list';

@Component({
  selector: 'app-select-book',
  templateUrl: './select-book.component.html',
  styleUrl: './select-book.component.scss'
})
export class SelectBookComponent {
  bookList = BookList

  bookSelected!: string
  chapterSelected!: number
  verseSelected!: any

  chapters: Array<any> = []

  completeReference() {
    for (const item of this.bookList) {
      if(item.name === this.bookSelected) {
        console.log(item.name)
      }
    }
  }

}