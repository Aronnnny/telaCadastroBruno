import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaloginComponent } from './telalogin/telalogin.component';

const routes: Routes = [
  {path:'login',component: TelaLoginComponent},
  {path:'cadastro',component: TelacadastroComponent},
  {path:'cadastronovo',component: TelaCadastroComponent},
  {path:'loginnovo',component: TelaloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
