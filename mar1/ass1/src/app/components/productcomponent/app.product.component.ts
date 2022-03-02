import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Categories, Manufacturers} from './../../models/app.constants';
import {Product} from './../../models/app.product.model';
import { ProductLogic } from "./../../models/app.logic";
@Component({
  selector: 'app-product-component',
  templateUrl: './app.product.view.html'
})

export class ProductComponent implements OnInit, OnChanges {
  product: Product;
  products:Array<Product>
  private logic:ProductLogic;
  columnHeaders:Array<string>;
  color:string;

  // Copy the Values from the constants into the local public data members of the component
  categories = Categories;
  manufacturers = Manufacturers;

  constructor() {
    this.product = new Product(0,'','','','','',0);
    this.products = new Array<Product>();
    // instantiate the logic object here
    this.logic = new ProductLogic();
    this.columnHeaders = new Array<string>();
    this.color ="";
    console.log('Invoked Constructor');
  }

  ngOnInit() {
    // Read all Keys of the Product object
    // Object.keys(object) will read name of each public members of the object and return as string array
    this.columnHeaders = Object.keys(this.product);
    // make call to a method from Logic class and get the data
    this.products = this.logic.getProducts();
    console.log('Invoked ngOnInit');
  }
  // This will look for Modification of Data if any
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Invoked ngOnChanges');
  }

  clear():void {
    this.product = new Product(0,'','','','','',0);
  }
  save():void {
    this.products = this.logic.addProduct(this.product);
  }
  getselectedproduct(prd:Product):void {
   //   this.product = prd;
   // assign() is a method that will create a new object at new location
   // by reading schema and values from the source object
   // Parameters
   // Parameter 1: The Target Object, {}
   // Parameter 2: The Source Object, prd
   this.product = Object.assign({}, prd);
  }

  onCatNameReceived(event:any):void {
    this.product.CategoryName = event;
    console.log(`Category NAme ${ this.product.CategoryName }`);

  }

  onManufacturerReceived(event:any):void {
    this.product.Manufacturer = event;
    console.log(`Manufacturer NAme ${ this.product.Manufacturer}`);
  }
}
