import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Customers } from './customers/customers.component';
import { orderDetails } from './orderDetails/orderDetails.component';
import { Orders } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,Orders,orderDetails,Customers
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
