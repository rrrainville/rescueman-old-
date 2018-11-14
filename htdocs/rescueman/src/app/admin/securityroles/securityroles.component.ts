import { Component, OnInit } from '@angular/core';
import { PagerService } from 'src/app/shared/pager.service';

import { SecurityRolesService } from 'src/app/shared/controllers/securityroles.service';

@Component({
  selector: 'app-securityroles',
  templateUrl: './securityroles.component.html',
  styleUrls: ['./securityroles.component.scss']
})
export class SecurityRolesComponent implements OnInit {

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

  constructor(
    private pagerService: PagerService,
    private securityRolesService: SecurityRolesService
  ) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    this.securityRolesService.getAll()
    .subscribe(data => {
      this.allItems = data

      // initialize to page 1
      this.setPage(1);
    });
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
    console.log('disableItem');

    if(id != null) {
      const data = {
        'id': id,
        'statecode': 'inactive'
      };

      this.securityRolesService.update(data)
        .subscribe(data => { 
          console.log(data);

          this.refreshPage();

          //this.enableFields(this.f.statecode.value);
        });
    }
  }
}
