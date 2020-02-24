import { Component, OnInit } from '@angular/core';
import { LoginServiceService }from '../../services/login-service.service'
import {Router} from '@angular/router';
import{ FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string ;
  public  password:string;

  constructor(private servicio: LoginServiceService,
    private ruta: Router,
    private flash: FlashMessagesService
    ) { }

  ngOnInit() {

  }

  loguearUser(){
    this.servicio.logIn(this.email,this.password)
    .then((res) => {
      this.flash.show('Ingreso exitoso',{cssClass:'alert-success',timeout:4000});
      this.ruta.navigate(['/privado']);
    }).catch((err)=>{
      this.flash.show(err.message,{cssClass:'alert-danger',timeout:4000});
      console.log(err);
    })
  }

  loginGoogle(){
    this.servicio.loginWithGoogle()
    .then((res) => {
      this.ruta.navigate(['/privado']);
    }).catch(err => console.log(err));
    
  }

  loginFacebook(){
    this.servicio.loginWithFacebook()
    .then((res)=>{
      this.ruta.navigate(['/privado'])
    }).catch(err => console.log(err));
  }

}
