import { Component } from "@angular/core";

@Component({
    selector: "orderDetails",
    templateUrl:"orderDetails.component.html",
    styleUrls:["orderDetails.component.css"]
})

export class orderDetails {

    orderId = 7;
    customerId = 1;
    itemIds = [117,114,42,24,13];

}