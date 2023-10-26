import { coupounComponent } from './store/coupon.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
// import { CheckoutComponent } from './store/checkout.component';
import { cartDetail } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './store.FirstGuard';
import { CheckoutComponent } from './store/checkout.component';
import { ProductDescription } from './store/productDescription.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'product/:id',
        component: ProductDescription,
        canActivate: [StoreFirstGuard]

      },
      {
        path: 'coupon',
        component: coupounComponent,
        canActivate: [StoreFirstGuard],

      },
      {
        path: 'cart',
        component: cartDetail,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [],
      },
      { path: '**', redirectTo: '/coupon' },
    ]),
  ],

  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
