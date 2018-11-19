import { Component, OnInit } from '@angular/core';
import { PagerService } from '../shared/pager.service';
import { VeterinariansService } from '../shared/controllers/veterinarians.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.scss']
})
export class VetsComponent implements OnInit {

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

  roles: any;

  constructor(
    private pagerService: PagerService,
    private veterinariansService: VeterinariansService
  ) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    this.veterinariansService.getAll()
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
    console.log('disableUser Login');

    if(id != null) {
      const data = {
        'id': id,
        'statecode': 'inactive'
      };

      this.veterinariansService.update(data)
        .subscribe(data => { 
          console.log(data);

          this.refreshPage();

          //this.enableFields(this.f.statecode.value);
        });
    }
  }
}
