import { NgModule } from '@angular/core';
import {RemoveWhiteSpacesPipe} from './remove-white-spaces.pipe';

const pipes = [
  RemoveWhiteSpacesPipe
];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class PipesModule {}
