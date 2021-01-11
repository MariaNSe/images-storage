import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MetaGuard } from '@ngx-meta/core';
import { ImagesGalleryComponent } from './images-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: ImagesGalleryComponent,
    // canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Photo details',
        description: 'Photo details',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesGalleryRoutingModule {}
