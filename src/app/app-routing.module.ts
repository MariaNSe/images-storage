import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllImagesListComponent } from './modules/all-images-list/all-images-list.component';

export const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'images', pathMatch: 'full' },
  {
    path: 'images',
    component: AllImagesListComponent,
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
