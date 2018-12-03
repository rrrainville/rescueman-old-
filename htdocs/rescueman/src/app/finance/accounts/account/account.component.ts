import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { BankAccountsService } from 'src/app/shared/controllers/bank-accounts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  entity: string = 'bank_accounts';

  formAccount: FormGroup;
  id: string;

  formSubscription: Subscription;

  accountId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private bankAccountsService: BankAccountsService
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
          this.id = `New Bank Account`;

          return;
        }

        this.accountId = this.id;

        this.bankAccountsService.get(this.id).subscribe(
          data => {
            // console.log(data);
            
            this.setFormData(data);

            this.id = data.name;

            //console.log(JSON.parse(this.securityRole.permissions));
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formAccount.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formAccount.controls) { // 'field' is a string

      const control = this.formAccount.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formAccount = this.formBuilder.group({
      id: [null],
      name: [null, [ Validators.required ]],
      description: [null],
      number: [null],
      balance: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data) {
    this.formAccount.patchValue({
      id: data.id,
      name: data.name,
      description: data.description,
      number: data.number,
      balance: data.balance,
      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    this.enableFields(this.f.statecode.value);
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formAccount.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.bankAccountsService.update(this.formAccount.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formAccount.reset();

    this.formAccount.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    // this.router.navigate(['/admin/SecurityRoles/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm Login');

    //debugger;

    if(this.formAccount.invalid)
      return;

    if(this.f.id.value == null) {
      // this.formSecurityRole.removeControl('id');

      this.bankAccountsService.create(this.formAccount.value)
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
      this.bankAccountsService.update(this.formAccount.value)
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
