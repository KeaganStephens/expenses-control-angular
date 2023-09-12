import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  form!: FormGroup 
  isLoginIn = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authticationService : AuthenticationService,
    private snackbar: MatSnackBar
  ) {}


    ngOnInit(): void {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      })
    }

    login(){
      this.isLoginIn = true
      this.authticationService.signIn({
        email: this.form.value.email,
        password: this.form.value.password
      }).subscribe(() => {
        this.router.navigate(['home'])
      }, (error:any) => {
        this.isLoginIn = false;
        this.snackbar.open(error.message,"OK",{
          duration: 5000
        })
      })
      
    }

}
