import { ProductDescription } from './productDescription.component';
import { coupounComponent } from './coupon.component';
import { CheckoutComponent } from './checkout.component';
import { ReversePipe } from './discount.pipe';
import { RouterModule } from '@angular/router';

import { cartDetail } from './cartDetail.component';

import { cartSummaryComponent } from './cartSummary.component';

import { ModelModule } from './../model/model.module';

import { BrowserModule } from '@angular/platform-browser';

import { StoreComponent } from './store.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@NgModule({

  imports: [BrowserModule, ModelModule,RouterModule,FormsModule], //

  declarations: [StoreComponent, cartSummaryComponent, cartDetail,ReversePipe,CheckoutComponent,coupounComponent,ProductDescription], // register & launch

  exports: [StoreComponent, cartDetail,CheckoutComponent,ProductDescription], // sharing components across modules - directives & pipes etc

})

export class StoreModule {}

