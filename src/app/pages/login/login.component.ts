import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';
import { login, logout, loading } from '../../store/login-page.action';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  getCurrentLoginState,
  getLoginState,
} from '../../store/login-page.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user$: User = {
    mobile: 0,
    password: '',
    loading: false,
  };
  constructor(private _store: Store<User>, private _router: Router) {}
  public loginFormGroup: any;

  ngOnInit(): void {
    this._store.select(getLoginState).subscribe((data) => {
      console.log(data);
      this.user$ = data;
    });
    this.loginFormGroup = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get mobile() {
    return this.loginFormGroup.get('mobile');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  login() {
    localStorage.setItem('mobile', this.loginFormGroup.get('mobile').value);
    this._store.dispatch(
      login({
        mobile: this.loginFormGroup.get('mobile').value,
        password: this.loginFormGroup.get('password').value,
        loading: false,
      })
    );
    this._router.navigate(['posts']);
  }

  logout() {
    this._store.dispatch(logout());
  }

  loading(value: Boolean) {
    this._store.dispatch(loading(value));
  }
}
