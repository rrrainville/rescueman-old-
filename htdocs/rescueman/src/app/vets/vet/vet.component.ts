import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Veterinary } from 'src/app/shared/models/veterinary';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { VeterinariansService } from 'src/app/shared/controllers/veterinarians.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PeopleService } from 'src/app/shared/controllers/people.service';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.scss']
})
export class VetComponent implements OnInit {

  entityname: string = "veterinarians";

  formVeterinary: FormGroup;
  id: string;

  formSubscription: Subscription;

  // veterinary: Veterinary = new Veterinary();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,    
    private veterinariansService: VeterinariansService,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.initFormData();

    console.log(this.route);

    this.formSubscription = this.route.params.subscribe(
      (params: any) => {
        console.log(params);

        this.id = params['id'];

        console.log(this.id);

        if(this.id == 'new') {
          this.id = 'New Veterinary';

          return;
        }

        this.veterinariansService.get(this.id).subscribe(
          data => {
            console.log(data);
            
            // this.person = data;

            // this.setFormData(data);

            this.id = this.setFormData(data);   //this.data['name'];
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formVeterinary.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formVeterinary.controls) { // 'field' is a string

      const control = this.formVeterinary.get(field); // 'control' is a FormControl

      if(status == 'active' && field != 'veterinary_name')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formVeterinary = this.formBuilder.group({     
      id: [null],
      name: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
      phone: [null, [ Validators.required ]],
      veterinary_id: [null, [ Validators.required ]],
      veterinary_name: [null],
      street_line_1: [null],
      street_line_2: [null],
      city: [null],
      state_prov: [null],
      postal_code: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data) {
    this.formVeterinary.patchValue({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      veterinary_id: data.veterinary_id,
      veterinary_name: data.veterinary_name,
      street_line_1: data.street_line_1,
      street_line_2: data.street_line_2,
      city: data.city,
      state_prov: data.state_prov,
      postal_code: data.postal_code,
      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    this.getVeterinary(data.veterinary_id);

    // const _tmp = JSON.parse(data.roles);  //get roles from person

    // debugger;

    // this.roles = _tmp
    //   .map(x => new CheckboxItem(x.value, x.label, x.cheched));

    this.enableFields(this.f.statecode.value);

    return data.name;
  }

  resetPassword() {
    console.log('resetPassword Login');
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formVeterinary.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.veterinariansService.update(this.formVeterinary.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formVeterinary.reset();

    this.formVeterinary.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.router.navigate(['/vets/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm');

    // debugger;

    if(this.formVeterinary.invalid)
      return;

    if(this.f.id.value == null) {
      // this.formUser.removeControl('id');

      this.veterinariansService.create(this.formVeterinary.value)
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
      this.veterinariansService.update(this.formVeterinary.value)
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

  getVeterinary(id) {
    this.peopleService.get(id)
      .subscribe(data => {
        this.f.veterinary_name.setValue(data.name);
      });
  }

  printForm() {
    console.log('printForm');
  }

  vetSelected(event) {
    const vet = event;

    this.f.veterinary_id.setValue(vet.id);
    this.f.veterinary_name.setValue(vet.name);

    console.log("vetSelected", event);
  }
}
