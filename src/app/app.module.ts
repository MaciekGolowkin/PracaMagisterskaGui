import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApplicationBodyComponent } from './application-body/application-body.component';
import { NavigationBarComponent } from './application-body/navigation-bar/navigation-bar.component';
import { RegistryComponent } from './application-body/registry/registry.component';
import { CryteriaComponent } from './application-body/registry/cryteria/cryteria.component';
import { RowsResultComponent } from './application-body/registry/rows-result/rows-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicationBodyComponent,
    NavigationBarComponent,
    RegistryComponent,
    CryteriaComponent,
    RowsResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
