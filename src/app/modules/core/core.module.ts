import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import {RouterModule, Routes} from "@angular/router";
import {CoreService} from "./services/core.service";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

const coreRoutes: Routes = [
  {path: '', component: CoreComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes),
    CommonModule,
    InfiniteScrollModule
  ],
  providers: [
    CoreService
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
