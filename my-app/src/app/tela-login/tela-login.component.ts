import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  login = {
    email : '',
    password : ''
  }

  constructor(private accountService: AccountService,private router:Router){

  }

  ngOnInit() {
    this.login.email = '';
  }

  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      //navego para a rota vazia
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }



}
