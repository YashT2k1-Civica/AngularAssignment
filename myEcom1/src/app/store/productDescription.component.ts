import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'prod-desc',
  templateUrl: './productionDescription.component.html',
  styleUrls:['./animation.component.css']
})
export class ProductDescription implements OnInit {
  productId: any;
  product: any;


  constructor(
    private route: ActivatedRoute,
    private productRepo: ProductRepository,
    private router: Router,
    private cart : Cart,
    
  ) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.params['id'];
    console.log('Product ID:', this.productId);

    this.product = this.productRepo.getProduct(this.productId);
  }
  addProductToCart(product: Product) {
    console.log(product);

    this.cart.addLine(product);

    this.router.navigateByUrl('/cart');
  }
}
