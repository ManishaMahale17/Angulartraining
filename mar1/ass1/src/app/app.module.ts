import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing the FormsModule for Two-Way binding
// ReactiveFormsModule: for the Reactive Forms aka Model-Driven-Forms like MVC
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the develope defined components, directives, services
import {SimpleComponent} from './components/app.simple.component';
import {ProductComponent} from './components/productcomponent/app.product.component';
import { SelectComponent } from './directives/componentdirective/selectcomponent/app.select.component.directive';
import {ColorDirective} from './directives/attributedirective/ap.color.directive';
import { ProductFormCompnent } from './components/productformcomponent/app.productform.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent, ProductComponent,
    SelectComponent, ColorDirective, ProductFormCompnent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductFormCompnent]
})
export class AppModule { }
