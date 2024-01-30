import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeService } from '../node.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private serv: NodeService, private fb: FormBuilder) {}

  showRegister = false;

  registerForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
  });

  users: any;
  register_login() {
    console.log(this.registerForm);
    if (this.showRegister)
      this.serv.addUser(this.registerForm.value).subscribe((o) => {});
    else {
      var loginForm = this.registerForm;
      loginForm.removeControl(username);
      console.log(loginForm);
      this.serv.getUser(loginForm).subscribe((o) => {
        console.log(o);
      });
    }
  }

  register() {
    this.showRegister = !this.showRegister;
  }
}
