import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./modules/images-gallery/images-gallery.module').then(m => m.ImagesGalleryModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
