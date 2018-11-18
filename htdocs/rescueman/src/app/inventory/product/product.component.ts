import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/controllers/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/controllers/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  entityname: string = "products";

  formProduct: FormGroup;
  id: string;

  formSubscription: Subscription;

  product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,    
    private productsService: ProductsService
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
          this.id = 'New Product';

          return;
        }

        this.productsService.get(this.id).subscribe(
          data => {
            console.log(data);
            
            this.product = data;

            this.setFormData(this.product);

            this.id = this.product.name;
          });
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formProduct.controls; }

  enableFields(status) {
    //debugger;

    for (const field in this.formProduct.controls) { // 'field' is a string

      const control = this.formProduct.get(field); // 'control' is a FormControl

      if(status == 'active')
        control.enable();
      else
        control.disable();
    }

    //console.log(this.formUser.controls);

  }

  initFormData() {
    this.formProduct = this.formBuilder.group({
      id: [null],
      name: [null, [ Validators.required ]],
      type: [null],
      serial: [null],
      quantity: [null],
      available: [null],
      description: [null],
      notes: [null],
      created_by: [this.authService.getAuthenticatedUser()],
      updated_by: [this.authService.getAuthenticatedUser()],
      statecode: ['active']
    });
  }

  setFormData(data) {
    this.formProduct.patchValue({
      id: data.id,
      name: data.name,
      type: data.type,
      serial: data.serial,
      quantity: data.quantity,
      available: data.available,
      description: data.description,
      notes: data.notes,
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
      this.formProduct.patchValue({
        statecode: this.f.statecode.value == 'active' ? 'inactive' : 'active'
      });

      this.productsService.update(this.formProduct.value)
        .subscribe(data => { 
          console.log(data);

          this.enableFields(this.f.statecode.value);
        });
    }
  }

  resetForm() {
    console.log('resetForm Login');

    this.formProduct.reset();

    this.formProduct.patchValue({
      created_by: this.authService.getAuthenticatedUser(),
      updated_by: this.authService.getAuthenticatedUser(),
      statecode: 'active'
    });

    this.router.navigate(['/inventory/new']);

    //this.formUser.reset();
  }

  saveForm() {
    console.log('saveForm');

    debugger;

    if(this.formProduct.invalid)
      return;

    if(this.f.id.value == null) {
      // this.formUser.removeControl('id');

      this.productsService.create(this.formProduct.value)
        .subscribe(data => { 
          console.log(data);

          this.setFormData(data);

          this.toastr.success('Product has been created!')
        },
        (err: HttpErrorResponse) => {
          if(err.error.error)
            this.toastr.error(err.error.error);
          else
            this.toastr.error('Invalid Information!');
        });
    } else {
      this.productsService.update(this.formProduct.value)
        .subscribe(data => { 
          console.log(data);

          this.toastr.success('Product has been saved!')
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

}
