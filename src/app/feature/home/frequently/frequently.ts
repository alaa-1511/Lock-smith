import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import * as AOS from 'aos';


@Component({
  selector: 'app-frequently',
  imports: [  ReactiveFormsModule ,NgClass ],
  templateUrl: './frequently.html',
  styleUrl: './frequently.css',
})
export class Frequently  {

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }

  q1 = signal(true);
  q2 = signal(false);
  q3 = signal(false);
  q4 = signal(false);
  q5 = signal(false);
  q6 = signal(false);

  toggle(question: any) {
    question.set(!question());
  }




}
