import { Component } from '@angular/core';
import * as AOS from 'aos';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ourservice',
  imports: [  CarouselModule ],
  templateUrl: './ourservice.html',
  styleUrl: './ourservice.css',
})
export class Ourservice {

ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }

  mainOptions: OwlOptions = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  smartSpeed: 1000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  margin: 15,
  dotsEach: false,
  navSpeed: 700,
  nav: false,
   responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 }
  },
  animateOut: 'fadeOut',
  animateIn: 'fadeIn'
};


}
