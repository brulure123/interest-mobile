import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showPassword = false;
  showConfPassword = false;

  registerForm: FormGroup = new FormGroup({
    pseudo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    conf_password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  doRegister() {
    console.log('Do register');
  }

  togglePasswordFieldType() {
    this.showPassword = !this.showPassword;
  }

  toggleConfPasswordFieldType() {
    this.showConfPassword = !this.showConfPassword;
  }
}
