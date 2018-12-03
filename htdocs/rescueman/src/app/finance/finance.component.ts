import { Component, OnInit } from '@angular/core';
import { AccountTransactionsService } from '../shared/controllers/account-transactions.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  credits: any;
  debits: any;

  constructor(
    private accountTransactionsService: AccountTransactionsService
  ) { }

  ngOnInit() {
    this.accountTransactionsService.getTotalDebits()
      .subscribe(total => this.debits = total);      

    this.accountTransactionsService.getTotalCredits()
      .subscribe(total => this.credits = total);
  }

}
