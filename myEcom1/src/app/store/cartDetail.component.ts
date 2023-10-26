import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart.Detail.component.html',
})
export class cartDetail {
  discount: any = localStorage.getItem('discount');
  activateCoupoun: boolean = false;
  couponApplied: boolean = true;
  showToast: boolean =false;
  constructor(public cart: Cart) {}

  checkDiscount() {
    if (this.discount == '0') {
      return false;
    } else {
      return true;
    }
  }

  applyCoupon() {
    this.activateCoupoun = true;
    this.showToast = true;
  }

  closeToast() {
    this.showToast = false;
  }
}
