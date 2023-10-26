import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { StoreComponent } from './store/store.component';
import { coupounComponent } from './store/coupon.component';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;

      if (route.component != StoreComponent) {
        this.router.navigateByUrl('/');

        return false;
      }

      if(route.component =  coupounComponent){
        this.router.navigateByUrl('/coupon')

        return false;
      }
    }

    return true;
  }
}
