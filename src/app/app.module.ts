import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LogoutComponent } from 'src/app/pages/logout/logout.component';
import { ForgetPasswordComponent } from 'src/app/pages/forget-password/forget-password.component';
import { PageNotfoundComponent } from 'src/app/pages/page-notfound/page-notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ForgetPasswordComponent,
    PageNotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
