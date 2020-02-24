import { Component, OnInit } from '@angular/core';
import { LoginServiceService }from '../../services/login-service.service';
import { Router }from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogin:boolean;
  public nameUser:string;
  public email:String;
  public fotoUser:string;

  constructor(
    private servicioUser : LoginServiceService,
    private rutas : Router
  ) { }

  ngOnInit() {
    this.servicioUser.currentUser().subscribe(
      (auth) => {
        if(auth){
          this.isLogin = true;
          this.nameUser = auth.displayName;
          this.email = auth.email;
          this.fotoUser = auth.photoURL;
          console.log(this.nameUser+" "+this.email+" ");
        }
        else{
          this.isLogin = false;
        }
      }
      
    )
  }

  logoutUser(){
    this.servicioUser.logout();
    this.isLogin = false;
    this.rutas.navigate(['/login'])
  }
}
