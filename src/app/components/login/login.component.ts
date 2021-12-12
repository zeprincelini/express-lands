import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  get f() {
    return this.loginForm.controls;
  }

  login() {
    // const data = new FormData();
    // data.append('email', this.loginForm.value.email);
    // data.append('password', this.loginForm.value.password);
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    localStorage.setItem('user', JSON.stringify(data));
  }
}
