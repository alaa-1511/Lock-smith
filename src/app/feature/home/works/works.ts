import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works {

ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }

}
