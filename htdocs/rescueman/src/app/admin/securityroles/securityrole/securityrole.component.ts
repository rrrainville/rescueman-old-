import { Component, OnInit } from '@angular/core';
import { SecurityRolesService } from 'src/app/shared/controllers/securityroles.service';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityRole } from 'src/app/shared/models/securityrole';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { EntitiesService } from 'src/app/shared/controllers/entities.service';

import { CheckboxItem } from 'src/app/shared/models/checkbox-item';
import { CheckboxPermission } from '../checkbox-permissions/checkbox-permission';

@Component({
  selector: 'app-securityrole',
  templateUrl: './securityrole.component.html',
  styleUrls: ['./securityrole.component.scss']
})
export class SecurityRoleComponent implements OnInit {

  entity: string = 'Security Role';

  formSecurityRole: FormGroup;
  id: string;

  formSubscription: Subscription;

  securityRole: SecurityRole = new SecurityRole();

  usersByRole: any;

  // entities = new Array<CheckboxItem>();

  permissions = new Array<CheckboxPermission>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private securityRolesService: SecurityRolesService,
    private entitiesService: EntitiesService
  ) { }

  ngOnInit() {
    this.initFormData();

    console.log(this.route);

    this.formSubscription = this.route.params.subscribe(
      (params: any) => {
        // console.log(params);

        this.id = params['id'];

        // console.log(this.id);

        if(this.id == 'new') {
          this.id = `New ${this.entity}`;

          this.getEntities();

          return;
        }

        this.securityRolesService.get(this.id).subscribe(
          data => {
            // console.log(data);
            
            this.securityRole = data;

            this.setFormData(this.securityRole);

            this.id = this.securityRole.name;

            //console.log(JSON.parse(this.securityRole.permissions));
          });

          this.securityRolesService.getUsers(this.id).subscribe(
            data => {
              this.usersByRole = data;

              console.log(this.usersByRole);
            }
          );

      });
  }

  getEntities() {
    //debugger;

    // setTimeout(() => {
    //   this.entities = this.entitiesService.getAll()
    //     .map(x => new CheckboxItem(x.id, x.name));

    //   console.log(this.entities);
    // }, 100);    

    setTimeout(() => {
      this.permissions = this.entitiesService.getAll()
        .map(x => new CheckboxPermission(x.id, x.name));

      // console.log(this.permissions);
    }, 100);
  }

  // convenience getter for easy access to form fields
  get f() { return this.formSecurityRole.controls; }

  onEntityCheck(value) {
    // console.log(JSON.stringify(this.permissions));
    // console.log(value); 

    //set Permissions
    this.f.permissions.setValue(JSON.stringify(this.permissions));
  }

  enableFields(status) {
    //debugger;

    for (const field in this.formSecurityRole.controls) { // 'field' is a string

      const control = this.formSecurityRole.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formSecurityRole = this.formBuilder.group({
      id: [null],
      name: [null, [ Validators.required ]],
      description: [null],
      permissions: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data) {
    this.formSecurityRole.patchValue({
      id: data.id,
      name: data.name,
      description: data.description,
      permissions: data.permissions,
      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    const _tmp = JSON.parse(this.securityRole.permissions)

    // debugger;

    this.permissions = _tmp
      .map(x => new CheckboxPermission(x.value, x.label, x.create, x.read, x.write, x.remove));

    this.enableFields(this.f.statecode.value);
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formSecurityRole.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.securityRolesService.update(this.formSecurityRole.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formSecurityRole.reset();

    this.formSecurityRole.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.router.navigate(['/admin/SecurityRoles/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm Login');

    //debugger;

    if(this.formSecurityRole.invalid)
      return;

    if(this.f.id.value == null) {
      // this.formSecurityRole.removeControl('id');

      this.securityRolesService.create(this.formSecurityRole.value)
        .subscribe(data => { 
          console.log(data);

          this.setFormData(data);
          
          this.toastr.success(`${this.entity} has been created!`)
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.securityRolesService.update(this.formSecurityRole.value)
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
