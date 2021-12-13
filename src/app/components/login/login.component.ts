import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  loading = false;

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.loading = true;
    const data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    localStorage.setItem('user', JSON.stringify(data));
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 9000);
  }
}
