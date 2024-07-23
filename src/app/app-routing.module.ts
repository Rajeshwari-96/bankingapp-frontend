import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [

  {path: 'accounts', component:AccountListComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: 'deposit/:account_number', component:DepositComponent},
  {path:'',redirectTo:'accounts',pathMatch:'full'},
  {path: 'withdraw/:account_number', component:WithdrawComponent},
  {path: 'account-details/:account_number', component:AccountDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
