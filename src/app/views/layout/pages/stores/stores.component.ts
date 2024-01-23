import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../../../data/services/store.service";
import {CategoryModel} from "../../../../data/schemas/product.model";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-stores',
    templateUrl: './stores.component.html',
    styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

    products: CategoryModel[] = []
    currentOpt = '';

    constructor(private storeService: StoreService) {
    }

    ngOnInit() {
        this.storeService.getAllProducts().subscribe({
            next: (resp) => {
                console.log(resp);

                const categoryModels: CategoryModel[] = resp.reduce((acc, product) => {
                    const existingCategory = acc.find(item => item.categoryName === product.category);

                    if (existingCategory) {
                        existingCategory.products.push({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            description: product.description,
                            image: product.image
                        });

                        existingCategory.productsQuantity += 1;
                    } else {
                        acc.push({
                            categoryName: product.category,
                            products: [{
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                description: product.description,
                                image: product.image
                            }],
                            productsQuantity: 1
                        });
                    }

                    return acc;
                }, []);

                this.products = categoryModels;

            }, error: (err) => {
                console.error(err);
                Swal.fire({
                    title: 'Error!',
                    text: err,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        })
        this.storeService.menu$.subscribe({
            next: (resp) => {
                this.currentOpt = resp && resp.value != null ? resp.value : '';
            }
        })
    }

}
