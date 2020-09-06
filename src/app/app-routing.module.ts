import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ApplicationBodyComponent } from './Components/application-body/application-body.component';
import { ImageOperationsComponent } from './Components/application-body/image-operations/image-operations.component';
import { UserInfoComponent } from './Components/application-body/user-info/user-info.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:ApplicationBodyComponent,canActivate:[AuthGuard]},
  {path:"user",component:UserInfoComponent,canActivate:[AuthGuard]},
  {path:"register",component:RegisterComponent},
  {path:"imageoperations",component:ImageOperationsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
