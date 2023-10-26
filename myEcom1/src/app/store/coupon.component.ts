import { Component } from '@angular/core';

@Component({
  selector: 'coupon',
  templateUrl: './coupon.component.html',
  styleUrls:['./animation.component.css']
})

export class coupounComponent {
  constructor(){}

  getDiscount(){
    const discount = "50";
    localStorage.setItem('discount',discount);
  }
  
  noDiscount(){
    const discount = "0";
    localStorage.setItem('discount',discount);

  }
}





