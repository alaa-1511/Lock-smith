import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experts',
  imports: [ CarouselModule ],
  templateUrl: './experts.html',
  styleUrl: './experts.css',
})
export class Experts {

//   customslide: OwlOptions = {
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 2000,
//   autoplayHoverPause: true,
//   smartSpeed: 1000,
//   mouseDrag: true,
//   touchDrag: true,
//   pullDrag: true,
//   dots: true,
//   nav: true,
//   navSpeed: 700,
//   margin: 25,
//   items: 2,
//   navText: [
//     '<i class="fa-solid fa-arrow-left "></i>',
//     '<i class="fa-solid fa-arrow-right "></i>'
//   ],
//   responsive: {
//     0: { items: 1 },
//     768: { items: 2 }
//   }
// };

}
