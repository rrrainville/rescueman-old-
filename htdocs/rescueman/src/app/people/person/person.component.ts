import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/models/person';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { PeopleService } from 'src/app/shared/controllers/people.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ListsService } from 'src/app/shared/lists.service';
import { CheckboxItem } from 'src/app/shared/models/checkbox-item';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  entityname: string = "persons";

  formPerson: FormGroup;
  id: string;

  formSubscription: Subscription;

  person: Person = new Person();

  roles: any;
  selectedRoles: any;

  volunteers: any;
  selectedVolunteers: any;

  foster: any;
  selectedFoster: any;

  can_foster: any;
  selectedCanFoster: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,    
    private peopleService: PeopleService,
    private listsService: ListsService
  ) { }

  ngOnInit() {
    this.initFormData();

    console.log(this.route);

    this.roles = this.listsService.getListByName('person', 'role')
      .map(x => new CheckboxItem(x.id, x.name));

    this.volunteers = this.listsService.getListByName('person', 'volunteer')
      .map(x => new CheckboxItem(x.id, x.name));

    this.foster = this.listsService.getListByName('person', 'foster')
      .map(x => new CheckboxItem(x.id, x.name));

    this.can_foster = this.listsService.getListByName('person', 'canfoster')
      .map(x => new CheckboxItem(x.id, x.name));

    console.log(this.roles);

    this.formSubscription = this.route.params.subscribe(
      (params: any) => {
        console.log(params);

        this.id = params['id'];

        console.log(this.id);

        if(this.id == 'new') {
          this.id = 'New Person';

          return;
        }

        this.peopleService.get(this.id).subscribe(
          data => {
            console.log(data);
            
            this.person = data;

            this.setFormData(this.person);

            this.id = this.person.name;
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formPerson.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formPerson.controls) { // 'field' is a string

      const control = this.formPerson.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formPerson = this.formBuilder.group({     
      id: [null],
      name: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
      phone: [null, [ Validators.required ]],
      home_phone: [null],
      business_phone: [null],
      street_line_1: [null],
      street_line_2: [null],
      city: [null],
      state_prov: [null],
      postal_code: [null],
      roles: [null],
      volunteer: [null],
      foster: [null],
      can_foster: [null],
      home_inspected: [null],
      home_inspected_by: [null],
      adopter_contract: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data) {
    this.formPerson.patchValue({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      home_phone: data.home_phone,
      business_phone: data.business_phone,
      street_line_1: data.street_line_1,
      street_line_2: data.street_line_2,
      city: data.city,
      state_prov: data.state_prov,
      postal_code: data.postal_code,
      roles: data.roles,
      volunteer: data.volunteer,
      foster: data.foster,
      can_foster: data.can_foster,
      home_inspected: data.home_inspected,
      home_inspected_by: data.home_inspected_by,
      adopter_contract: data.adopter_contract,

      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    // const _tmp = JSON.parse(data.roles);  //get roles from person

    this.selectedRoles = JSON.parse(data.roles);  //get roles from person
    this.selectedVolunteers = JSON.parse(data.volunteer);  //get volunteer from person
    this.selectedFoster = JSON.parse(data.foster);  //get volunteer from person
    this.selectedCanFoster = JSON.parse(data.can_foster);  //get volunteer from person

    // debugger;

    // this.roles = _tmp
    //   .map(x => new CheckboxItem(x.value, x.label, x.cheched));

    this.enableFields(this.f.statecode.value);
  }

  resetPassword() {
    console.log('resetPassword Login');
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formPerson.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.peopleService.update(this.formPerson.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formPerson.reset();

    this.selectedRoles = this.volunteers = this.foster = this.can_foster = [];

    this.formPerson.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.router.navigate(['/people/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm');

    // debugger;

    if(this.formPerson.invalid)
      return;

    if(this.f.id.value == null) {
      // this.formUser.removeControl('id');

      this.peopleService.create(this.formPerson.value)
        .subscribe(data => { 
          console.log(data);

          this.setFormData(data);

          this.toastr.success('Person has been created!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.peopleService.update(this.formPerson.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success('Person has been saved!')
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

  onRolesCheck(event) {
    this.f.roles.setValue(JSON.stringify(event));

    console.log(event);
  }

  onVolunteerCheck(event) {
    this.f.volunteer.setValue(JSON.stringify(event));

    console.log(event);
  }

  onFosterCheck(event) {
    this.f.foster.setValue(JSON.stringify(event));

    console.log(event);
  }

  onCanFosterCheck(event) {
    this.f.can_foster.setValue(JSON.stringify(event));

    console.log(event);
  }
}
