import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SelectBookComponent } from './select-book/select-book.component';
import { DetailedBookListComponent } from './detailed-book-list/detailed-book-list.component';
import { BookContentTextComponent } from './book-content-text/book-content-text.component';

@NgModule({
    declarations: [
      SelectBookComponent,
      DetailedBookListComponent,
      BookContentTextComponent,
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [
      SelectBookComponent,
      DetailedBookListComponent,
      BookContentTextComponent,
    ]
})
export class ComponentsModule {}