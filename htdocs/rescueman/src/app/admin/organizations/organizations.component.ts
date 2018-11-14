import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from 'src/app/shared/controllers/organizations.service';

import { PagerService } from 'src/app/shared/pager.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

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
    private organizationsService: OrganizationsService
  ) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    this.organizationsService.getAll()
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

      this.organizationsService.update(data)
        .subscribe(data => { 
          console.log(data);

          this.refreshPage();

          //this.enableFields(this.f.statecode.value);
        });
    }
  }
}
