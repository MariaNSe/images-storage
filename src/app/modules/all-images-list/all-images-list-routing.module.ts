import { NgModule } from '@angular/core';
import { MetaGuard } from '@ngx-meta/core';
import { RouterModule, Routes } from '@angular/router';
import { AllImagesListComponent } from './all-images-list.component';

const routes: Routes = [
  {
    path: '',
    component: AllImagesListComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'All Images',
        description: 'Displaying all photos from server',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AllImagesListRoutingModule {}
