import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/controllers/users.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SecurityRolesService } from 'src/app/shared/controllers/securityroles.service';
import { SecurityRole } from 'src/app/shared/models/securityrole';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  formUser: FormGroup;
  id: string;

  formSubscription: Subscription;

  user: User = new User();

  securityRoles: SecurityRole;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private securityRolesService:  SecurityRolesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.initFormData();

    console.log(this.route);

    this.securityRolesService.getAll()
      .subscribe(
        data => {
          this.securityRoles = data;
        });

    this.formSubscription = this.route.params.subscribe(
      (params: any) => {
        console.log(params);

        this.id = params['id'];

        console.log(this.id);

        if(this.id == 'new') {
          this.id = 'New User';

          return;
        }

        this.usersService.get(this.id).subscribe(
          data => {
            console.log(data);
            
            this.user = data;

            this.setFormData(this.user);

            this.id = this.user.name;
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formUser.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formUser.controls) { // 'field' is a string

      const control = this.formUser.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formUser = this.formBuilder.group({
      id: [null],
      name: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
      phone: [null],
      address: [null],
      organization_id: [null],
      role_id: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data: User) {
    this.formUser.patchValue({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      organization_id: data.organization_id,
      role_id: data.role_id,
      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    this.enableFields(this.f.statecode.value);
  }

  resetPassword() {
    console.log('resetPassword Login');
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formUser.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.usersService.update(this.formUser.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formUser.reset();

    this.formUser.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.router.navigate(['/admin/users/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm Login');

    // debugger;

    if(this.formUser.invalid)
      return;

    if(this.f.id == null) {
      // this.formUser.removeControl('id');

      this.usersService.create(this.formUser.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success('User has been created!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.usersService.update(this.formUser.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success('User has been saved!')
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
