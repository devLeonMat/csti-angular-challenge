import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {
  searchFg: FormGroup;
  cartQuantity = 4;

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.searchFg = this.formBuilder.group({
      searchValue: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  goToHome() {
    this.route.navigate(['/'])
  }
}
