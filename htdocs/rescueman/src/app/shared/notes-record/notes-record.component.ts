import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../controllers/notes.service';
import { PagerService } from '../pager.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../controllers/users.service';

@Component({
  selector: 'app-notes-record',
  templateUrl: './notes-record.component.html',
  styleUrls: ['./notes-record.component.scss']
})
export class NotesRecordComponent implements OnInit, OnChanges {

  @Input() entityname: string;
  @Input() recordid: number;
  @Input() created_by: number;

  formNotes: FormGroup;

  // array of all items to be paged
  private allItems: any = [];
 
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any = [];

  //total records per page
  pageSize: number = 3;

  userList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private pagerService: PagerService,
    private toastr: ToastrService,
    private notesService: NotesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {    
    console.log("ngOnInit");

    this.formNotes = this.formBuilder.group({
      id: [null],
      body: [null, [ Validators.required ]],
      related_entity: [ this.entityname ],
      related_id: [ this.recordid ],
      created_by: [ this.created_by ],
      updated_by: [ this.created_by ],
      statecode: [ 'active' ]
    });

    this.usersService.getAll()
      .subscribe(data => {
        this.userList = data;

        this.refreshForm();
    });

    
  }

  getUserName(id) {
    console.log("getUserName", id);

    //debugger;

    for(let u = 0; u < this.userList.length; u++) {
      if(this.userList[u].id == id) return this.userList[u].name;
    }
    // this.userList.filter(u => {
    //   if(u.id == id) { console.log(u.name); return u.name; }
    // });
  }

  refreshForm() {
    console.log("refreshForm");

    if(!this.entityname || !this.recordid)
      return;

    this.formNotes.reset();

    this.formNotes.patchValue({
      related_entity: this.entityname,
      related_id: this.recordid,
      created_by: this.created_by,
      updated_by: this.created_by,
      statecode: 'active'
    });

    this.notesService.getAssignedNotes(this.entityname, this.recordid)
    .subscribe(data => {
      this.allItems = data

      // debugger;

      for(let i = 0; i < this.allItems.length; i++) {
        this.allItems[i].usename = this.getUserName(this.allItems[i].created_by);
      }
      console.log(data);

      // initialize to page 1
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page, this.pageSize);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");

    if(this.formNotes) {
      if(changes.created_by) this.f.created_by.setValue(changes.created_by.currentValue);
      if(changes.entityname) this.f.related_entity.setValue(changes.entityname.currentValue);
      if(changes.recordid) this.f.related_id.setValue(changes.recordid.currentValue);
    }

    // this.refreshForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.formNotes.controls; }

  addNote() {
    console.log("addNote");

    if(this.formNotes.invalid)
      return;

    this.notesService.create(this.formNotes.value)
      .subscribe(data => {
        console.log(data);

        this.refreshForm();

        this.toastr.success('Note has been created!')
      },
      (err: HttpErrorResponse) => {
        if(err.error.error)
          this.toastr.error(err.error.error);
        else
          this.toastr.error('Invalid Information!');
      })
  }

}
