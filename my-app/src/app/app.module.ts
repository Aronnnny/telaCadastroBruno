import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelacadastroclienteComponent } from './telacadastrocliente/telacadastrocliente.component';

import { httpInterceptorProviders } from './http-interceptors';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaloginComponent } from './telalogin/telalogin.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelacadastroComponent,
    TelacadastroclienteComponent,
    TelaCadastroComponent,
    TelaloginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
