import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { BankAccountsService } from 'src/app/shared/controllers/bank-accounts.service';
import { BankTransactionsService } from 'src/app/shared/controllers/bank-transactions.service';
import { ListsService } from 'src/app/shared/lists.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  entityname: string = "bank_transactions";

  formDeposit: FormGroup;
  id: string;

  formSubscription: Subscription;

  //Lists
  types: any = [];
  accounts: any = [];
  methods: any = [];
  status: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,    
    private bankAccountsService: BankAccountsService,
    private bankTransactionsService: BankTransactionsService,
    private listsService: ListsService
  ) { }

  ngOnInit() {
    this.initFormData();

    console.log(this.route);

    // debugger;

    this.methods = this.listsService.getListByName('payment', 'method');
    this.status = this.listsService.getListByName('payment', 'status');

    this.bankAccountsService.getAll()
      .subscribe(data => this.accounts = data);

    this.formSubscription = this.route.params.subscribe(
      (params: any) => {
        console.log(params);

        this.id = params['id'];

        console.log(this.id);

        if(this.id == 'new') {
          this.id = 'New Payment';

          return;
        }

        this.bankTransactionsService.get(this.id).subscribe(
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
  get f() { return this.formDeposit.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formDeposit.controls) { // 'field' is a string

      const control = this.formDeposit.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }
  }

  initFormData() {
    this.formDeposit = this.formBuilder.group({     
      id: [null],      
      // name: ['test'],
      transaction_type: ['w'],
      from_account: [null, [ Validators.required ]],
      regarding: [null],
      due_date: [null],
      due_date_aux: [null],
      transaction_date: [null],
      transaction_date_aux: [null],
      amount: [null, [ Validators.required ]],
      method: [null],
      statuscode: [null],
      description: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setDate(_date) {
    // debugger;

    // console.log(_date);

    if(_date) {
      let _date_c = new Date(Date.parse(_date));

      // console.log(_date_c);

      // console.log(_date_c.getFullYear());
      // console.log(_date_c.getMonth());
      // console.log(_date_c.getDate());

      return new NgbDate(_date_c.getFullYear(), _date_c.getMonth() + 1, _date_c.getDate());
    }
  }

  setFormData(data) {
    this.formDeposit.patchValue({
      id: data.id,
      // name: data.name,
      transaction_type: 'w',
      from_account: data.from_account,
      to_account: data.to_account,
      regarding: data.regarding,
      due_date: data.due_date,
      due_date_aux: this.setDate(data.due_date),
      transaction_date: data.transaction_date,
      transaction_date_aux: this.setDate(data.transaction_date),
      amount: data.amount,
      method: data.method,
      statuscode: data.statuscode,
      description: data.description,

      statecode: data.statecode,
      created_by: data.created_by,
      updated_by: this.authService.getAuthenticatedUser()
    });

    this.id = data.reference_number;

    this.enableFields(this.f.statecode.value);

    return data.name;
  }

  inactivateRecord() {
    console.log('inactivateRecord Login');

    if(this.f.id != null) {
      this.formDeposit.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.bankTransactionsService.update(this.formDeposit.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formDeposit.reset();

    this.formDeposit.patchValue({
      transaction_type: 'w',
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.id = 'New Payment';

    // this.router.navigate(['/finance/payment/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm');

    // debugger;

    if(this.formDeposit.invalid)
      return;

    let x: NgbDate;

    if(this.f.due_date_aux.value) {
      x = this.f.due_date_aux.value;

      this.f.due_date.setValue(new Date(x.year, x.month - 1, x.day).toISOString().slice(0,10));
    }
      
    if(this.f.transaction_date_aux.value) {
      x = this.f.transaction_date_aux.value;

      this.f.transaction_date.setValue(new Date(x.year, x.month - 1, x.day).toISOString().slice(0,10));
    }

    console.log(this.formDeposit.value);
    
    if(this.f.id.value == null) {
      // this.formUser.removeControl('id');

      this.bankTransactionsService.create(this.formDeposit.value)
        .subscribe(data => { 
          console.log(data);

          this.setFormData(data);

          this.toastr.success('Payment has been created!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.bankTransactionsService.update(this.formDeposit.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success('Payment has been saved!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    }

    this.router.navigate(['/finance']);
  }

  printForm() {
    console.log('printForm');
  }

}
