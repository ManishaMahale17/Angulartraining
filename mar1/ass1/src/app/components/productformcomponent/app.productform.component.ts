import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";


import { Product } from "./../../models/app.product.model";

// import CustomValidator
import {CustomValidator} from './app.custom.validator';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})

export class ProductFormCompnent implements OnInit {
  product:Product;
  frmProduct:FormGroup;
  products:Array<Product>;
  constructor() {
      this.product  = new Product(0,'','','','','',0);
      this.products = new Array<Product>();
      // instantiate the FormGroup and map it with public properties of Product class
      this.frmProduct = new FormGroup({
        'ProductRowId': new FormControl(this.product.ProductRowId,
            Validators.compose([Validators.required, Validators.minLength(2),
            Validators.maxLength(8), Validators.pattern('[0-9]+'),
            CustomValidator.checkEven])),
        'ProductId': new FormControl(this.product.ProductId)
      });
  }

  ngOnInit() { }
  save():void {
    // write data to the product
    this.product = this.frmProduct.value;
    this.products.push(this.product);
  }
}
