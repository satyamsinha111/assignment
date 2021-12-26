import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailPageRoutingModule } from './photo-detail-page-routing.module';
import { PhotoDetailPageComponent } from './photo-detail-page.component';

@NgModule({
  declarations: [PhotoDetailPageComponent],
  imports: [CommonModule, PhotoDetailPageRoutingModule, ComponentsModule],
})
export class PhotoDetailPageModule {}
