import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private username:string | null=null;

  get getUsername():string | null{
    return this.username;
  }
  login(username:string){
    this.username=username;
  }
  logout(){
    this.username=null;
  }
  isLoggedIn():boolean{
    return !!this.username;
  }

}
