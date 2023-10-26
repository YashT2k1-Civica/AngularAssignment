import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports:[HttpClientModule],
  providers: [StaticDataSource,ProductRepository,Cart,Order,OrderRepository,
  {provide:StaticDataSource,useClass:RestDataSource}], // register & launch "Service/Injectables"
})
export class ModelModule { }//exclusive services


