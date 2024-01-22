import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../data/schemas/product.model";
import {StoreService} from "../../../data/services/store.service";
import {CartService} from "../../../data/services/cart.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() cardData: ProductModel;
    private keyCart = 'cart';
    private cart: ProductModel[] = [];

    constructor(private storeService: StoreService,
                private cartService: CartService) {
    }

    ngOnInit() {
    }

    addToCart(cardData: ProductModel) {
        this.cart.push(cardData);
        this.saveCart();
        this.cartService.addCounter();
    }

    getCart(): ProductModel[] {
        this.loadCart();
        return this.cart;
    }

    private loadCart(): void {
        const cartData = localStorage.getItem(this.keyCart);
        if (cartData) {
            this.cart = JSON.parse(cartData);
        }
    }

    private saveCart(): void {
        localStorage.setItem(this.keyCart, JSON.stringify(this.cart));
    }
}
