import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

    private baseUrl="http://localhost:8080/account"

    getAllAccounts():Observable<Account[]>{
      
      return this.httpClient.get<Account[]>(`${this.baseUrl}/getallaccounts`);
    }

    createaccount(account:Account):Observable<Account>{
      return this.httpClient.post<Account>(`${this.baseUrl}/create`,account)
    }

    getAccountDetailsByAccountNumber(account_number:number):Observable<Account>{

      return this.httpClient.get<Account>(`${this.baseUrl}/${account_number}`)
}
deposit(account_number:number,amount:number):Observable<Account>{

  const request={ amount }
  return this.httpClient.put<Account>(`${this.baseUrl}/deposit/${account_number}/${amount}`,request);
}

Withdraw(account_number:number,amount:number):Observable<Account>{

  const request={ amount }
  return this.httpClient.put<Account>(`${this.baseUrl}/withdraw/${account_number}/${amount}`,request);
}
delete(account_number:number):Observable<string>{
  return this.httpClient.delete<string>((`${this.baseUrl}/delete/${account_number}`), {responseType: 'text' as 'json'})
}
} 
 