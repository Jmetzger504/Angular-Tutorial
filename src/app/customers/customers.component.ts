import { Component } from "@angular/core";

@Component({
    selector: "customers",
    templateUrl: "customers.component.html",
    styleUrls: ["customers.component.css"]
})

export class Customers {
    name = "Julian Metzger";
    id = 42;
    balance = 1;
    address = "My House";
    phoneNumber = "56709";
    invoiceTotal = 56709;
}