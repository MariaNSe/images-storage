import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagesGalleryComponent} from './images-gallery.component';
import {SharedModule} from '../../shared/shared.module';
import {ImagesGalleryRoutingModule} from './images-gallery-routing.module';

@NgModule({
  declarations: [ImagesGalleryComponent],
  imports: [CommonModule, ImagesGalleryRoutingModule, SharedModule],
})
export class ImagesGalleryModule {}
