import { NgModule } from '@angular/core';
import * as Mat from '@angular/material';

const modules = [
  Mat.MatToolbarModule,
  Mat.MatButtonModule,
  Mat.MatGridListModule,
  Mat.MatInputModule,
  Mat.MatFormFieldModule,
  Mat.MatRadioModule,
  Mat.MatSelectModule,
  Mat.MatDatepickerModule,
  Mat.MatNativeDateModule,
  Mat.MatCheckboxModule,
  Mat.MatSnackBarModule,
  Mat.MatTableModule,
  Mat.MatIconModule,
  Mat.MatPaginatorModule,
  Mat.MatSortModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
