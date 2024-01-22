import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../data/services/store.service";
import {CategoryModel} from "../../../../data/schemas/product.model";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  products: CategoryModel[] = []
  currentOpt = '';
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getProducts().then(resp=>{
      this.products = resp;
    })
    this.storeService.menu$.subscribe({
      next: (resp)=>{
        this.currentOpt = resp && resp.value != null ? resp.value : '';
      }
    })
  }

}
