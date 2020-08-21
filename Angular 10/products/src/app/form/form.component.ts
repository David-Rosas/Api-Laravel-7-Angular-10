import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup
  serverErrors = [];
  constructor(private formService: FormService, private route:Router) { }

  ngOnInit(){
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'gender': new FormControl(null, [Validators.required]),
      'birthday': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'confirm_password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get phone() { return this.registerForm.get('phone'); }
  get gender() { return this.registerForm.get('gender'); }
  get birthday() { return this.registerForm.get('birthday'); }
  get password() { return this.registerForm.get('password'); }
  get confirm_password() { return this.registerForm.get('confirm_password'); }

  registerUser(){
    this.formService.registerUser(this.registerForm).subscribe(success => {
      console.log(success);
      this.route.navigate(['/products']);

    },error => {
        console.log(error);
        this.serverErrors = error.error.errors;
        console.log(this.serverErrors);
        ;
    });
  }

}
