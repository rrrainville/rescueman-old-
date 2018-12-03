import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PagerService } from 'src/app/shared/pager.service';
import { AccountTransactionsService } from 'src/app/shared/controllers/account-transactions.service';
import { BankAccountsService } from 'src/app/shared/controllers/bank-accounts.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnChanges {

  @Input() accountId: number;

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

  accounts: any;

  constructor(
    private pagerService: PagerService,
    private bankAccountsService: BankAccountsService,
    private accountTransactionsService: AccountTransactionsService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
    
    if(this.accountId < 0) {
      this.refreshPage();
    }
  }

  ngOnInit() {
    this.getAccounts();

    this.refreshPage();
  }

  refreshPage() {
    console.log("refreshPage", this.accountId);

    if(this.accountId < 0) {
      this.accountTransactionsService.getAll()
        .subscribe(data => {
          this.allItems = data

          // initialize to page 1
          this.setPage(1);
        });
    } else {
      this.accountTransactionsService.getByAccountId(this.accountId)
        .subscribe(data => {
          this.allItems = data

          // initialize to page 1
          this.setPage(1);
        });
    }
  }

  getAccounts() {
    this.bankAccountsService.getAll()
      .subscribe(data => this.accounts = data);
  }

  findAccount(id) {
    if(this.accounts) {
      for(let i = 0; i < this.accounts.length; i++) {
        if(this.accounts[i].id == id)
          return this.accounts[i].name;
      }
    }

    return "Not Found";
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

  disableItem(id) {
    console.log('disable item');

    if(id != null) {
      const data = {
        'id': id,
        'statecode': 'inactive'
      };

      this.accountTransactionsService.update(data)
        .subscribe(data => { 
          console.log(data);

          this.refreshPage();

          //this.enableFields(this.f.statecode.value);
        });
    }
  }

}
