import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CartService} from "../../../data/services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {
  searchFg: FormGroup;
  cartQuantity = 0;
  private counterSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private cartService: CartService) {
    this.searchFg = this.formBuilder.group({
      searchValue: ['', Validators.required]
    });
    this.counterSubscription = this.cartService.counter$.subscribe((count)=>{
      this.cartQuantity = count
    })
  }
  ngOnInit() {
  }

  goToHome() {
    this.route.navigate(['/'])
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
