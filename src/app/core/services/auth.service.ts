import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as localMobileStorage from 'tns-core-modules/application-settings';
import { ApiService } from '@core/services';
import { API_ROUTES } from '@core/routes/api-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) {
  }

  isLoggedIn() {
    return !!this.getAccessToken();
  }

  refreshToken() {
    return this.apiService.post<any>(API_ROUTES['REFRESH_TOKEN'], { refreshToken: this.getRefreshToken() }).pipe(tap((res) => {
      this.storeAuth(res);
    }));
  }

  getAccessToken() {
    if (localMobileStorage.getString('user')) {
      return JSON.parse(localMobileStorage.getString('user')).accessToken;
    }
    return null;
  }

  private getRefreshToken() {
    if (localMobileStorage.getString('user')) {
      return JSON.parse(localMobileStorage.getString('user')).refreshToken;
    }
    return null;
  }

  private storeAuth(auth) {
    localMobileStorage.setString('user', JSON.stringify(auth));
  }
}
