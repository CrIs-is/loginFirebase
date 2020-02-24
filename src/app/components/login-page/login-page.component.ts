import { Component, OnInit } from '@angular/core';
import { LoginServiceService }from '../../services/login-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string ;
  public  password:string;

  constructor(private servicio: LoginServiceService,
    private ruta: Router) { }

  ngOnInit() {

  }

  loguearUser(){
    this.servicio.logIn(this.email,this.password)
    .then((res) => {
      this.ruta.navigate(['/privado']);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
