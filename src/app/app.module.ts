import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HeaderComponent } from './components/header/header.component';

var config = {
  apiKey: "AIzaSyA5oNSiXHponAehCBRrAp1KWnpYF3jXB64",
  authDomain: "user-portal-6c2a2.firebaseapp.com",
  databaseURL: "https://user-portal-6c2a2.firebaseio.com",
  projectId: "user-portal-6c2a2",
  storageBucket: "user-portal-6c2a2.appspot.com",
  messagingSenderId: "853240610951"
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    CreateComponentComponent,
    EditComponentComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
