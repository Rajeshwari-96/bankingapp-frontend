import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

account_number:number=0;
account:Account=new Account();

constructor(private accountService:AccountService,private route:ActivatedRoute,private router:Router){}

   ngOnInit(){
     this.account_number=this.route.snapshot.params['account_number'];
     this.accountService.getAccountDetailsByAccountNumber(this.account_number).subscribe(data=>{
      this.account=data;
     })
    }
  
  successMessage="";
  errorMessage="";
  
    onSubmit(){
      if(this.isValidAmount(this.account.account_balance)){
      this.accountService.Withdraw(this.account_number,this.account.account_balance).subscribe(data=>{

        this.account=data;
        this.successMessage="withdraw successfully"

        setTimeout(() => {
          this.router.navigate(['/accounts'])

        },1000);
      
      })
  }else{
      this.errorMessage="Invalid Amount"
      setTimeout(() => {
        this.errorMessage=""
      }, 1000);
  }
}
  isValidAmount(amount:number):boolean{

    return amount>0 && amount<1000000
}
}