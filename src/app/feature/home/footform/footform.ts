
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { Auth } from '../../../core/service/auth/auth';
import { NgClass } from '@angular/common';
import * as AOS from 'aos';
import { FlowbiteService } from '../../../core/service/service/flowbite-service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-footform',
  imports: [  ReactiveFormsModule,NgClass ],
  templateUrl: './footform.html',
  styleUrl: './footform.css',
})
export class Footform {
constructor(private flowbiteService: FlowbiteService) {}

 private readonly fb= inject(FormBuilder);
private readonly auth=inject(Auth)
  flag: WritableSignal<boolean> = signal(false);

 private readonly cookieService =inject(CookieService)

forminit!: FormGroup;

ngOnInit(): void {

      this.flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });

  this.enterForm();
   AOS.init({
    //  disable: window.innerWidth < 768,
      duration: 1000,
      once: false,
    });
}

enterForm(): void {
  this.forminit = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    address: [null, [Validators.required]],
    service: [null, [Validators.required]],
    message: [null, [Validators.required]],
    phone: [null, [Validators.required, Validators.pattern(/^\+1[2-9]\d{2}[2-9]\d{6}$/)]],
  });
}

onSubmit() {
  if (this.forminit.valid) {
    console.log(this.forminit.value);
      this.auth.saveFormData(this.forminit.value);

    this.forminit.reset();
    this.selectedService.set('');
  } else {
    this.forminit.markAllAsTouched();
  }
}


selectedService = signal<string>('');

selectService(value: string) {
  this.selectedService.set(value);

  this.forminit.get('service')?.setValue(value);


  const mainDropdown: any = document.getElementById('mainDropdown');
  if (mainDropdown) mainDropdown.classList.add('hidden');
}


}
