import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllImagesListComponent } from './all-images-list.component';
import { AllImagesListRoutingModule } from './all-images-list-routing.module';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [AllImagesListComponent],
  imports: [CommonModule, AllImagesListRoutingModule, AppModule],
  entryComponents: [],
  exports: [AllImagesListComponent],
})
export class AllImagesListModule {}
