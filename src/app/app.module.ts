import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninModule } from './pages/signin/signin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SigninModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBJp_YeMGqa8c5F-xOmLyxKgG1mu_So3ZA",
      authDomain: "expenses-control-app-a6d72.firebaseapp.com",
      projectId: "expenses-control-app-a6d72",
      storageBucket: "expenses-control-app-a6d72.appspot.com",
      messagingSenderId: "387344671182",
      appId: "1:387344671182:web:ed7e7ba13d017a2457cb9f"
    }),
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
