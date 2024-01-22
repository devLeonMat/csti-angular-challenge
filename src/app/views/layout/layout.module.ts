import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {LayoutComponent} from "./layout.component";
import {SharedModule} from "../shared/shared.module";
import {StoresComponent} from "./pages/stores/stores.component";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [LayoutComponent, StoresComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class LayoutModule { }
