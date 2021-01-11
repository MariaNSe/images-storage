import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const components = [ImageCardComponent, PaginationComponent];

const modules = [PipesModule, CommonModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return { ngModule: SharedModule };
  }
}
