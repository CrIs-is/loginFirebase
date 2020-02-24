import { Component, OnInit } from '@angular/core';
import { LoginServiceService  }from '../../services/login-service.service';
import {Router }from '@angular/router'
import { FlashMessagesService }from 'angular2-flash-messages';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authS: LoginServiceService,private rutas : Router,private flash:FlashMessagesService) { }
  public email:string;
  public password:string;
   
  

  ngOnInit() {

  }

  addUser(){
    this.authS.register(this.email,this.password)
    .then((res )=>{
      this.flash.show('Usuario creado con exito',{cssClass:'alert-success',timeout:4000});
      console.log(res);
      this.rutas.navigate(['/privado']);
      
    }).catch( (err)=>{
      this.flash.show(err.message,{cssClass:'alert-danger',timeout:4000});
     
    })
  }

}
