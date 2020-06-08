import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationBodyComponent } from './application-body/application-body.component';
import { ImageOperationsComponent } from './application-body/image-operations/image-operations.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:ApplicationBodyComponent},
  {path:"imageoperations",component:ImageOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
