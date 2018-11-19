import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PagerService } from '../pager.service';
import { PeopleService } from '../controllers/people.service';

@Component({
  selector: 'search-contact-box',
  templateUrl: './search-contact-box.component.html',
  styleUrls: ['./search-contact-box.component.scss']
})
export class SearchContactBoxComponent implements OnInit {

  @Output() selected = new EventEmitter<any>();

  // public model: any;

  //private users: any = [];

  public searchText: string;

  // array of all items to be paged
  private allItems: any = [];
 
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any = [];

  //total records per page
  pageSize: number = 5;

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

  closeResult: string;
  
  constructor(
    private modalService: NgbModal,
    private pagerService: PagerService,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  rowSelected(id) {
    // console.log("rowSelected", id);

    const selected = this.allItems.find(x => x.id == id);

    this.selected.emit(selected);     // notifies parent of selected record

    this.modalService.dismissAll();   // closes the window

    //console.log(x);
  }
}
