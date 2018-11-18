import { Component, OnInit } from '@angular/core';
import { PagerService } from '../shared/pager.service';
import { PeopleService } from '../shared/controllers/people.service';
import { ListsService } from '../shared/lists.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

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
    private peopleService: PeopleService,
    private listsService: ListsService
  ) { }

  ngOnInit() {
    this.roles = this.listsService.getListByName('person', 'role');

    this.refreshPage();
  }

  refreshPage() {
    this.peopleService.getAll()
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

      this.peopleService.update(data)
        .subscribe(data => { 
          console.log(data);

          this.refreshPage();

          //this.enableFields(this.f.statecode.value);
        });
    }
  }

  checkRole(userRoles, roleId) {
    if(!userRoles) return false;

    const _roles = JSON.parse(userRoles);

    //debugger;

    for(let i = 0; i < _roles.length; i++) {
      if(_roles[i] == roleId) return true;
    }

    return false;
  }
}
