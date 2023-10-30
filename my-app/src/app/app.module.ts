import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelacadastroclienteComponent } from './telacadastrocliente/telacadastrocliente.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelacadastroComponent,
    TelacadastroclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
