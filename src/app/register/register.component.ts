import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
// import { RegisterModel } from './register.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup
  
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router : Router){}

  repeatPass: string = 'none';
  ngOnInit(): void{
    this.registerForm = this.formBuilder.group({
      fullname:['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]],
      email:['', [Validators.required, Validators.email]],
      // username:['', [Validators.required, Validators.minLength(5)]],
      pwd:['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      rpwd: new FormControl("")
    })
  }
 
  registerSubmitted(){
    this.http.post<any>("http://localhost:4000/signup",this.registerForm.value).subscribe(res=>{
      alert("Registration Successfully!");
      this.registerForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Something went wrong!");
    }
    )

    if(this.PWD.value == this.PWD.value){
      console.log(this.registerForm.valid);
      this.repeatPass = 'none'
    }else{this.repeatPass = 'inline'}
  }

  get FullName(): FormControl{
    return this.registerForm.get("fullname") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Username(): FormControl{
    return this.registerForm.get("username") as FormControl;
  }
  get PWD(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  

}
