import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  async login(user:any){
    const result = await this.http.post<any>('http://localhost:5170/api/User/Login',user).toPromise();
    if (result && result.access_token){
      window.localStorage.setItem('token',result.access_token);
      return true;
    }

    return false;
  }

  async createdAccount(account :any)
  {
    const result = await this.http.post<any>('http://localhost:5170/api/User/Register',account).toPromise();
    return result;
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }
}
