import { CanActivate } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import * as localMobileStorage from 'tns-core-modules/application-settings';

export class AuthGuard implements CanActivate {

  constructor(
    private routerExtensions: RouterExtensions
  ) {
  }

  canActivate() : boolean {
    const user = localMobileStorage.getString('user') ? localMobileStorage.getString('user') : '';
    if (!user) {
      // navigate to any page
      return false;
    }
    return true;
  }
}
