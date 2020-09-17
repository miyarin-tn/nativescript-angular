import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// pipes
import {
  TranslatePipe,
} from './pipes';

// components
import {
  SharedLayoutRootComponent,
} from './components';

const SHARED_PIPES = [
  TranslatePipe,
];

const SHARED_COMPONENTS = [
  SharedLayoutRootComponent,
];

@NgModule({
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_COMPONENTS,
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule, // ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  exports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    ...SHARED_PIPES,
    ...SHARED_COMPONENTS,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
