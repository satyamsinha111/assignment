import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailPageComponent } from './photo-detail-page.component';

const routes: Routes = [{ path: '', component: PhotoDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoDetailPageRoutingModule { }
