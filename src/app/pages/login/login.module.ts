import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import * as loginReducer from '../../store/login-page.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', loginReducer.loginReducer),
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
