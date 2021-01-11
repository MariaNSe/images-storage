import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';

const components = [
  ImageCardComponent,
  PaginationComponent,
  ModalWindowComponent,
];

const modules = [PipesModule, CommonModule];

@NgModule({
  declarations: [...components, ShareBtnComponent],
  imports: [...modules, MatDialogModule, MatIconModule],
  exports: [...modules, ...components],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return { ngModule: SharedModule };
  }
}
