import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];


@NgModule({
  declarations: [],
  imports: [    
    RouterModule.forRoot(routes),
    CommonModule, 
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
