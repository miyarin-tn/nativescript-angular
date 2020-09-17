import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';

// guard
import {
  AuthGuard,
} from '@core/guards';

// services
import {
  HttpService,
  ApiService,
  AuthService,
} from '@core/services';

// component
import { AppComponent } from './app.component';
import { AuthInterceptor } from '@core/interceptor/token.interceptor';

const CORE_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
  HttpService,
  ApiService,
  AuthService
];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [...CORE_PROVIDERS],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
