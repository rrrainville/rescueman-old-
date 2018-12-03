import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { AnimalsService } from 'src/app/shared/controllers/animals.service';
import { ListsService } from 'src/app/shared/lists.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CheckboxItem } from 'src/app/shared/models/checkbox-item';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  entityname: string = "animals";

  formAnimal: FormGroup;
  id: string;

  formSubscription: Subscription;

  //Lists
  types: any = [];
  genders: any = [];
  breeds: any = [];
  colors: any = [];
  activitylevels: any = [];

  coatlengths: any = [];
  sizes: any = [];

  status: any = [];

  animal_datails: any = [];

  selectedDetails: any;

  // veterinary: Veterinary = new Veterinary();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,    
    private animalsService: AnimalsService,
    private listsService: ListsService
  ) { }

  ngOnInit() {
    this.initFormData();

    console.log(this.route);

    this.types = this.listsService.getListByName('animal', 'type');
    this.genders = this.listsService.getListByName('animal', 'gender');

    this.breeds = this.listsService.getListByName('animal', 'breed');
    this.colors = this.listsService.getListByName('animal', 'color');
    this.activitylevels = this.listsService.getListByName('animal', 'activitylevel');

    this.coatlengths = this.listsService.getListByName('animal', 'coatlength');
    this.sizes = this.listsService.getListByName('animal', 'size');

    this.status = this.listsService.getListByName('animal', 'status');

    this.animal_datails = this.listsService.getListByName('animal', 'details')
      .map(x => new CheckboxItem(x.id, x.name));

    this.formSubscription = this.route.params.subscribe(
      (params: any) => {
        console.log(params);

        this.id = params['id'];

        console.log(this.id);

        if(this.id == 'new') {
          this.id = 'New Animal';

          return;
        }

        this.animalsService.get(this.id).subscribe(
          data => {
            console.log(data);
            
            // this.person = data;

            // this.setFormData(data);

            //this.id = 

            this.setFormData(data);   //this.data['name'];
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formAnimal.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formAnimal.controls) { // 'field' is a string

      const control = this.formAnimal.get(field); // 'control' is a FormControl

      if(status == 'active' && field != 'veterinary_name')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formAnimal = this.formBuilder.group({     
      id: [null],
      name: [null, [ Validators.required ]],
      type: [null],
      gender: [null],
      birthday: [null],
      birthday_aux: [null],
      weight: [null],
      breed: [null],
      secondary_breed: [null],
      color: [null],
      secondary_color: [null],
      alternate_name: [null],
      activity_level: [null],
      intake_location: [null],
      intake_date: [null],
      intake_date_aux: [null],
      foster_tag: [null],
      species: [null],
      coat_lenght: [null],
      size: [null],
      microchipid: [null],
      rabbiesid: [null],
      details: [null],
      statuscode: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setDate(_date) {
    // debugger;

    console.log(_date);

    if(_date) {
      let _date_c = new Date(Date.parse(_date));

      console.log(_date_c);

      return new NgbDate(_date_c.getFullYear(), _date_c.getMonth() + 1, _date_c.getDate());
    }
  }

  setFormData(data) {
    this.formAnimal.patchValue({
      id: data.id,
      name: data.name,
      type: data.type,
      gender: data.gender,
      birthday: data.birthday,
      birthday_aux:  this.setDate(data.birthday),
      weight: data.weight,
      breed: data.breed,
      secondary_breed: data.secondary_breed,
      color: data.color,
      secondary_color: data.secondary_color,
      alternate_name: data.alternate_name,
      activity_level: data.activity_level,
      intake_location: data.intake_location,
      intake_date: data.intake_date,
      intake_date_aux: this.setDate(data.intake_date),
      foster_tag: data.foster_tag,
      species: data.species,
      coat_lenght: data.coat_lenght,
      size: data.size,
      microchipid: data.microchipid,
      rabbiesid: data.rabbiesid,
      details: data.details,
      statuscode: data.statuscode,

      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    this.id = data.name;

    // if(data.birthday) this.f.birthday_aux.setValue(new NgbDate(data.birthday.getFullYear(), data.birthday.getMonth(), data.birthday.getDay()));
    // if(data.intake_date) this.f.intake_date_aux.setValue(new NgbDate(data.intake_date.getFullYear(), data.intake_date.getMonth(), data.intake_date.getDay()));

    // const _tmp = JSON.parse(data.roles);  //get roles from person

    // debugger;

    if(data.details) this.selectedDetails = JSON.parse(data.details);  //get volunteer from person

    // this.roles = _tmp
    //   .map(x => new CheckboxItem(x.value, x.label, x.cheched));

    this.enableFields(this.f.statecode.value);

    return data.name;
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formAnimal.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.animalsService.update(this.formAnimal.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formAnimal.reset();

    this.formAnimal.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.selectedDetails = [];

    this.router.navigate(['/vets/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm');

    debugger;

    if(this.formAnimal.invalid)
      return;

    let x: NgbDate;

    if(this.f.birthday_aux.value) {
      x = this.f.birthday_aux.value;

      this.f.birthday.setValue(new Date(x.year, x.month - 1, x.day).toISOString().slice(0,10));
    }
      
    if(this.f.intake_date_aux.value) {
      x = this.f.intake_date_aux.value;

      this.f.intake_date.setValue(new Date(x.year, x.month - 1, x.day).toISOString().slice(0,10));
    }

    console.log(this.formAnimal.value);
    
    if(this.f.id.value == null) {
      // this.formUser.removeControl('id');

      this.animalsService.create(this.formAnimal.value)
        .subscribe(data => { 
          console.log(data);

          this.setFormData(data);

          this.toastr.success('Veterinary has been created!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.animalsService.update(this.formAnimal.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success('Veterinary has been saved!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    }
  }

  printForm() {
    console.log('printForm');
  }

  onDetailsCheck(event) {
    this.f.details.setValue(JSON.stringify(event));
  }
}
