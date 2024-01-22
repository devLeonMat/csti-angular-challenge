import { Component, OnInit } from '@angular/core';
import {CarouselModel} from "../../../data/schemas/carousel.model";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {StoreService} from "../../../data/services/store.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private router: Router,
              private storeService: StoreService) {
  }
  currentIndex: number = 0;
  currentOpt = '';
  images: CarouselModel[] = [
    { url: 'assets/img/banner_boton_millas_destop.png', description: '¡Disfruta tus Millas en restaurantes!' },
    { url: 'assets/img/canje_rappi_destop_banner_benefit.png', description: 'Usa tus Millas como ahorro' },
    { url: 'assets/img/canjemixto_destop_banner_benefit.gif', description: '¡Disfruta tus Millas en restaurantes!' },
    { url: 'assets/img/restaurantes_destop_banner_benefit_01.01_31.01.png', description: '¡Disfruta tus Millas Benefit en Rappi!' },
  ];

  ngOnInit(): void {
    this.startCarousel();
    this.storeService.menu$.subscribe({
      next: (resp)=>{
        this.currentOpt = resp && resp.value != null ? resp.value : '';
      }
    })
  }

  startCarousel(): void {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


}
