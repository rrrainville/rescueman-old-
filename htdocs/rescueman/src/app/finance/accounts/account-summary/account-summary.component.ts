import { Component, OnInit } from '@angular/core';
import { PagerService } from 'src/app/shared/pager.service';
import { BankAccountsService } from 'src/app/shared/controllers/bank-accounts.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent implements OnInit {

  //private users: any = [];

  public searchText: string;

  // array of all items to be paged
  private allItems: any = [];
 
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any = [];

  //total records per page
  pageSize: number = 10;

  balance: number = 0.00;

  constructor(
    private pagerService: PagerService,
    private bankAccountsService: BankAccountsService
  ) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    this.bankAccountsService.getAll()
    .subscribe(data => {
      this.allItems = data

      this.balance = this.sumValues(data);

      // initialize to page 1
      this.setPage(1);
    });
  }

  sumValues(data) {
    // debugger;

    let total = 0.0;

    for(let i = 0; i < data.length; i++) {
      total += Number(data[i].balance);
    }

    return total;

  }

  setPageSize(event) {
    console.log(event.target.value);

    this.pageSize = event.target.value;

    this.setPage(1);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page, this.pageSize);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
