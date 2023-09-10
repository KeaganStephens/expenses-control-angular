import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent,MatFormFieldModule],
      imports: [
        ReactiveFormsModule,
        NgModule,
        CommonModule,
        MatInputModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule
      ]
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it ('given form, when email is empty, then recover password button should be disabled', () => {
    expect(page. querySelector('[test-id="recover-password-button"]').disabled).toBeTruthy();
  })

});
