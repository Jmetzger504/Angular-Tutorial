import {Component} from "@angular/core"

@Component({
    selector:"orders",
    templateUrl:"orders.component.html",
    styleUrls:["orders.component.css"]
})

export class Orders {
    orderId = 7;
    itemId = 117;
    orderPrice = 42;
}