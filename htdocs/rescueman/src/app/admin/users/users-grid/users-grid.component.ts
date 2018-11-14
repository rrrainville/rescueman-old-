import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PagerService } from 'src/app/shared/pager.service';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent implements OnInit, OnChanges {

  public searchText: string;

  // array of all items to be paged
  @Input() allItems: any = [];
 
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any = [];

  //total records per page
  pageSize: number = 10;

  constructor(
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    // this.refreshPage();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');

    this.setPage(1);
  }

  // refreshPage() {
  //   this.usersService.getAll()
  //   .subscribe(data => {
  //     this.allItems = data

  //     // initialize to page 1
  //     this.setPage(1);
  //   });
  // }

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

  // disableUser(id) {
  //   console.log('disableUser Login');

  //   if(id != null) {
  //     const data = {
  //       'id': id,
  //       'statecode': 'inactive'
  //     };

  //     this.usersService.update(data)
  //       .subscribe(data => { 
  //         console.log(data);

  //         this.refreshPage();

  //         //this.enableFields(this.f.statecode.value);
  //       });
  //   }
  // }  
}
