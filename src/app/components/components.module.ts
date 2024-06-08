import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SelectChapterBookComponent } from './select-chapter-book/select-chapter-book.component';
import { SelectVerseBookComponent } from './select-verse-book/select-verse-book.component';
import { SelectBookComponent } from './select-book/select-book.component';
import { DetailedBookListComponent } from './detailed-book-list/detailed-book-list.component';
import { BookContentTextComponent } from './book-content-text/book-content-text.component';

@NgModule({
    declarations: [
      SelectBookComponent,
      SelectChapterBookComponent,
      SelectVerseBookComponent,
      DetailedBookListComponent,
      BookContentTextComponent,
  ],
    imports: [
        CommonModule,
        AngularMaterialModule
    ],
    exports: [
      SelectBookComponent,
      SelectChapterBookComponent,
      SelectVerseBookComponent,
      DetailedBookListComponent,
      BookContentTextComponent,
    ]
})
export class ComponentsModule {}