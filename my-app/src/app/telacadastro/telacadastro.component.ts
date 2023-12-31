import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/shared/account.service';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.css']
})
export class TelacadastroComponent implements OnInit {
  account = {
    completeName: '',
    userName:'',
    email: '',
    password:'',
    confirmPassword:'',
    role:'Vendedor'
  }

  constructor(private accountService : AccountService){}
  ngOnInit() {
  }

  async onSubmit(){
    try{
      const result = await this.accountService.createdAccount(this.account);
      console.log(result);
      console.log("Sucesso");
    }catch(error){
      console.error(error);
    }
  }
};


