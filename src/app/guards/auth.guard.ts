import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginServiceService} from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private rutas:Router,
    private angularFire: AngularFireAuth,
    private servicio : LoginServiceService
    
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.servicio.authService.authState
    .pipe(take(1))
    .pipe(map(authState => !! authState))
    .pipe(tap( authenticated =>{
      if(!authenticated){
        this.rutas.navigate(['/login']);
      }
    }))

  }
  
}
