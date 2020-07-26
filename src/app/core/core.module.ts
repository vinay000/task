import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardModule} from '../dashboard/dashboard.module'

import { CoreRoutingModule } from './core-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [SideNavComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    DashboardModule,
    CoreRoutingModule,
  ],
  exports:[SideNavComponent]
})
export class CoreModule { }
