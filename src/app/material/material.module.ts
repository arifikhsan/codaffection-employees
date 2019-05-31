import { NgModule } from '@angular/core';
import * as Mat from '@angular/material';

const modules = [Mat.MatToolbarModule, Mat.MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
