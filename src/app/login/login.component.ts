import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {


  public loginForm !: FormGroup

  // loginForm = new FormGroup({
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   pwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
  //  });

   constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router){

   }

   ngOnInit(): void{
      this.loginForm = this.formBuilder.group({
        email:['', [Validators.required, Validators.email]],
        pwd:['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
      })
    }

   loginSubmitted(){
    this.http.get<any>("http://localhost:4000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.pwd === this.loginForm.value.pwd
      });
      if (user){
        alert("User login successfully!");
        this.loginForm.reset();
        this.router.navigate(['/dashboard'])
      }else{
        alert("User not found!")
      }
    },err=>{
      alert("Something went wrong!")
    }
    )
    console.log(this.loginForm);
   }

  // loginSubmitted(){
  //   this.userservice.postlogin(this.loginForm.value).subscribe(
  //   (value:any)=>{
  //   alert("login successfully")
  //   this.loginForm=value;
  //   console.log(value)
  //   localStorage.setItem("token",value.token);
  //   this.router.navigateByUrl("/dashbord")
  //   },
  //   (error:any)=>{
  //   alert("error")
  //   }
  //   )
  //   }



   get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
   }
   get PWD(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
   }

}
