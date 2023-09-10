import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import {MatInputModule} from '@angular/material/input';
import { Route, RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
  path: '',
  component: SigninComponent
  }
]

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SigninModule { }