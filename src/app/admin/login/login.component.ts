import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      loginId: new FormControl('',[Validators.required]),
      loginPass: new FormControl('', [Validators.required])
    });
  }

  login(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    var id = this.myForm?.get('loginId')?.value;
    var pass = this.myForm?.get('loginPass')?.value;
    console.log(id +" <-> "+ pass);
  }

}
