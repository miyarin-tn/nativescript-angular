import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

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
} from '@core/services';

// component
import { AppComponent } from './app.component';

const CORE_PROVIDERS = [
  AuthGuard,
  HttpService,
  ApiService,
];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
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
