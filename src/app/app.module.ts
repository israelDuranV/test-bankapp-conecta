import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {CapitalizadoPipe} from '../pipes/capitalizado.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MiscuentasComponent } from './components/miscuentas/miscuentas.component';
import { EnviardineroComponent } from './components/enviardinero/enviardinero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MiscuentasComponent,
    EnviardineroComponent,
    CapitalizadoPipe
  ],
  imports: [
    AngularFontAwesomeModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
