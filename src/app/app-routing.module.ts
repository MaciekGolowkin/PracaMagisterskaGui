import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ApplicationBodyComponent } from './Components/application-body/application-body.component';
import { ImageOperationsComponent } from './Components/application-body/image-operations/image-operations.component';

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
