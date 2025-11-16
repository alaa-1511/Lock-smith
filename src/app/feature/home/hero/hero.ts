import { Component, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero',
  imports: [CarouselModule ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideo.nativeElement;

    video.play().catch(() => {
      video.muted = true;
      video.play();
    });
  }



mainOp: OwlOptions = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  smartSpeed: 1000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  dotsEach: false,
  navSpeed: 700,
  nav: false,
  items: 1,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn'
};

ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }
}
