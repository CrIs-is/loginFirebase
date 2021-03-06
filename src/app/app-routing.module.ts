import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { AuthGuard } from '../app/guards/auth.guard'

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"singup",component:RegisterPageComponent},
  {path:"home",component:HomePageComponent},
  {path:"privado",component:PrivadoPageComponent,canActivate:[AuthGuard]},
  {path:"**",component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
