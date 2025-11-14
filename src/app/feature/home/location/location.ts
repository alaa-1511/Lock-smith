import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }




}
