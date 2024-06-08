import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select'; // select
import { MatFormFieldModule } from '@angular/material/form-field'; // select
import { MatListModule } from '@angular/material/list'; // list
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class AngularMaterialModule { }
