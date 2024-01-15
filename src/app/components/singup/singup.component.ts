import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  public form={
    name:null,
    email:null,
    password:null,
    password_confirmation:null
  }

  constructor() { }

  ngOnit(): void {

  }

  submitSingup(){
    console.log(this.form);
  }
}
