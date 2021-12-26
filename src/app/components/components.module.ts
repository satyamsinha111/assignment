import { DrawerComponent } from './../shared/drawer/drawer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const customComponents = [DrawerComponent, HeaderComponent];

@NgModule({
  declarations: [customComponents],
  imports: [CommonModule],
  exports: [customComponents],
})
export class ComponentsModule {}
