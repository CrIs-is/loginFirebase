import { Component, OnInit } from '@angular/core';
import { LoginServiceService  }from '../../services/login-service.service';
import {Router }from '@angular/router'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authS: LoginServiceService,private rutas : Router) { }
  public email:string;
  public password:string;
   
  

  ngOnInit() {

  }

  addUser(){
    this.authS.register(this.email,this.password)
    .then((res )=>{
      console.log(res);
      this.rutas.navigate(['/privado']);
      
    }).catch( (err)=>{
      alert(err);
    })
  }

}
