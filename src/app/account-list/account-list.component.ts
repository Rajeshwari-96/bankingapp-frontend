import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {

    accounts:Account[]=[];
    constructor(private accountService:AccountService,private router:Router){}

    ngOnInit(){
      this.getAccounts();
    }
    getAccounts(){

      this.accountService.getAllAccounts().subscribe(data => {
          this.accounts = data;

      })
    }

    deposit(account_number:number){

      this.router.navigate(['/deposit',account_number])

    }
    withdraw(account_number:number){
      this.router.navigate(['/withdraw',account_number])

    }
    delete(account_number:number){
      this.accountService.delete(account_number).subscribe(data=>{
        console.log(data);
        this.getAccounts();
      })
    }
    view(account_number:number){
      this.router.navigate(['/account-details',account_number])
    }
}
