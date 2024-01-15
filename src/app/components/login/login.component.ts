import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form={
    email:null,
    password:null,
  }

  constructor() { }

  ngOnit(): void {

  }

  submitLogin(){
    console.log(this.form);
  }

}
