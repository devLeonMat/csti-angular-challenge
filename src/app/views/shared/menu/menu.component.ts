import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../data/services/store.service";
import {MenuModel} from "../../../data/schemas/menu.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public storeService: StoreService) { }

  menuOptions: MenuModel[] = [];

  ngOnInit() {
    this.storeService.getMenuOptions().then(resp=>{
      this.menuOptions = resp;
    })
  }

  activeOption(value: MenuModel) {
    this.storeService.setMenuOption(value);
  }
}
