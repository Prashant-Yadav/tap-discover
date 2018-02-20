import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {CoreComponent} from "./modules/core/core/core.component";
import {HttpClientModule} from "@angular/common/http";
import {CoreService} from "./modules/core/services/core.service";
import {HttpClientService} from "./shared/services/http-client.service";

enableProdMode();

const appRoutes: Routes = [
  {path: '', component: CoreComponent},
  // {path: '', loadChildren: './modules/core/core.module#CoreModule'}
];


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules}),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService,
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
