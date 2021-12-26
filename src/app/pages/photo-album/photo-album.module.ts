import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
FormsModule;
import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumComponent } from './photo-album.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotoAlbumComponent],
  imports: [
    CommonModule,
    PhotoAlbumRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class PhotoAlbumModule {}
