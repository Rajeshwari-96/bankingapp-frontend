import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {
  account_number:number=0;
 account:Account = new Account();
constructor(private accountService:AccountService,private route:ActivatedRoute){}

ngOnInit(){

  this.account_number=this.route.snapshot.params['account_number'];
  this.accountService.getAccountDetailsByAccountNumber(this.account_number).subscribe(data=>{
  this.account=data
  })
}
}
