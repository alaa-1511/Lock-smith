import { Component, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-choose',
  imports: [ ],
  templateUrl: './choose.html',
  styleUrl: './choose.css',
})
export class Choose {

ngOnInit() {
    AOS.init({

      duration: 1000,
      once: false,
    });
  }

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideo.nativeElement;

    video.play().catch(() => {
      video.muted = true;
      video.play();
    });
  }

}
