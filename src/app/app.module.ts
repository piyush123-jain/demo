import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { socketConnectionService } from './socketConnection.service';
  

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
 ],
  imports: [FormsModule,
    HttpClientModule,
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule
  ],
  providers: [
    socketConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
