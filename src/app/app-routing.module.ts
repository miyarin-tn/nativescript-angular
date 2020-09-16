import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { environment } from '@environments/environment';

const routes: Routes = [
  { path: '', redirectTo: `/${environment.homeRoot}`, pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('@app/home/home.module').then((m) => m.HomeModule) }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
