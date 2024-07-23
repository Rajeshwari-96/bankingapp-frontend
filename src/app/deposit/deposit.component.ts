import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {

   account_number:number=0;
  account:Account=new Account();

  constructor(private accountService:AccountService,private rout:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.account_number=this.rout.snapshot.params['account_number'];
    this.accountService.getAccountDetailsByAccountNumber(this.account_number).subscribe(data=>{
      this.account=data;
    })

  }
  successMessage="";
  errorMessage="";
  onSubmit(){
    if(this.isValidAmount(this.account.account_balance)){
   this.accountService.deposit(this.account_number,this.account.account_balance).subscribe(data=>{
    this.account=data;
    this.successMessage="Deposite Successfully"
    setTimeout(() => {
    this.router.navigate(['/accounts'])
   }, 1000);
  })
  } else{
  this.errorMessage="Invaild Amount..Please enter valid amount"
  setTimeout(() => {
    this.errorMessage=""
  }, 1000);
  }
}
  isValidAmount(amount:number):boolean{

    return amount>0 && amount<1000000
  }

}
