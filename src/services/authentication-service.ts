import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthenticationService{

  private host:string="http://dev.rimtrack.com/ws_rimtrack_all/";


  constructor(private http:HttpClient){

  }
  
  isLoggedIn() {
    return (localStorage.getItem('token') != null);
  }
  
  login(user:any){
    return this.http.post(this.host+"signin",user);
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    // jwtHelperService
  }

  logout() {
      localStorage.clear();
    }


}