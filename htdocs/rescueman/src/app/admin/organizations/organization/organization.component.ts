import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { OrganizationsService } from 'src/app/shared/controllers/organizations.service';
import { Organization } from 'src/app/shared/models/organization';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  entity: string = 'Organization';

  formOrganization: FormGroup;
  id: string;

  formSubscription: Subscription;

  organization: Organization = new Organization();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private organizationsService: OrganizationsService
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
          this.id = `New ${this.entity}`;

          return;
        }

        this.organizationsService.get(this.id).subscribe(
          data => {
            console.log(data);
            
            this.organization = data;

            this.setFormData(this.organization);

            this.id = this.organization.name;
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formOrganization.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formOrganization.controls) { // 'field' is a string

      const control = this.formOrganization.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formOrganization = this.formBuilder.group({
      id: [null],
      name: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
      phone: [null],
      address: [null],
      website: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data: Organization) {
    this.formOrganization.patchValue({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      website: data.website,
      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    this.enableFields(this.f.statecode.value);
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formOrganization.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.organizationsService.update(this.formOrganization.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formOrganization.reset();

    this.formOrganization.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.router.navigate(['/admin/organizations/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm Login');

    // debugger;

    if(this.formOrganization.invalid)
      return;

    if(this.f.id.value == null) {
      // this.formOrganization.removeControl('id');

      this.organizationsService.create(this.formOrganization.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success(`${this.entity} has been created!`)
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.organizationsService.update(this.formOrganization.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success(`${this.entity} has been saved!`)
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
    console.log('printForm Login');
  }

}
