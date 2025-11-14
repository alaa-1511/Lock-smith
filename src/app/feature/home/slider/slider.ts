import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  imports: [CarouselModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {



customOptions: OwlOptions = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 1000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  nav: true,
  navSpeed: 700,
  margin: 25,
  items: 2,
  navText: [
    '<span class="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:text-white text-primary shadow-md hover:bg-primary/80 transition-all"><i class=\'fa-solid fa-arrow-left\'></i></span>',
    '<span class="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:text-primary text-white shadow-md hover:bg-white/80 transition-all"><i class=\'fa-solid fa-arrow-right\'></i></span>'
  ],
  responsive: {
    0: { items: 1 },
    768: { items: 2 }
  }
};


}
