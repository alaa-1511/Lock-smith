import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Location } from "./location/location";
import { Ourservice } from './ourservice/ourservice';
import { Slider } from "./slider/slider";
import { Choose } from './choose/choose';
import { Works } from "./works/works";
import { Experts } from "./experts/experts";
import { Frequently } from './frequently/frequently';
import { Footform } from './footform/footform';


@Component({
  selector: 'app-home',
  imports: [Hero, Location, Ourservice, Slider, Choose, Works, Experts ,Frequently ,Footform],

templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
