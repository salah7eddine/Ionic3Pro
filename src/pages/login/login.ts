import { HomePage } from './../home/home';
import { AuthenticationService } from './../../services/authentication-service';
import {Component, OnInit} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
//import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  mode:number=0;
  user:any={
    username:'',
    password:'',
  }


  constructor(private authService:AuthenticationService ,public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  ngOnInit() {
    this.authService.logout();
  }

  

  // login and go to home page
  login(user) { 
    this.authService.login(user).subscribe(resp=>{
      let jwtToken =JSON.parse(JSON.stringify(resp)).token;
      this.authService.saveToken(jwtToken);
      this.mode = 0;
      this.nav.setRoot(HomePage);
     
    },err=>{
      //show message error
      this.mode = 1;
    })
   
  }

 

}
