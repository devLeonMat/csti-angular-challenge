import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [ShoppingCartsComponent, MenuComponent, CarouselComponent],
  exports: [
    ShoppingCartsComponent,
    MenuComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
