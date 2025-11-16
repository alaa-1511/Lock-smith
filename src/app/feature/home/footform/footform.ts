
import { Component, HostListener, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { Auth } from '../../../core/service/auth/auth';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import * as AOS from 'aos';
import { FlowbiteService } from '../../../core/service/service/flowbite-service';
import { initFlowbite } from 'flowbite';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-footform',
    imports: [  ReactiveFormsModule   ,TreeModule ,NgIf,NgClass,NgStyle ,NgFor],
    templateUrl: './footform.html',
  styleUrl: './footform.css',
})
export class Footform {
constructor(private flowbiteService: FlowbiteService) {
  this.subDropdownOpen.set(new Array(this.services.length).fill(false));
}

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


// lolo
 selectedService = signal<string>('');
  mainDropdownOpen = signal<boolean>(false);
  subDropdownOpen = signal<boolean[]>([]);

  services = [
    {
      label: 'Automotive Locksmith Service',
      subServices: ['Digital Door Locks', 'Lock installation', 'Key Extraction', 'Electronic Door Lock']
    },
    {
      label: 'Residential Locksmith Service',
      subServices: ['Car Locksmith']
    },
    {
      label: 'Commercial Locksmith Service',
      subServices: ['Commercial Lock Replacement', 'Rekey Lock', 'Locksmith']
    },
    {
      label: '24/7 Emergency Locksmith Service',
      subServices: ['Emergency Lockouts', 'Lock Out Of Car']
    }
  ];


  toggleDropdown() {
    this.mainDropdownOpen.update(v => !v);
  }

  toggleSubDropdown(index: number) {
    this.subDropdownOpen.update(current =>
      current.map((val, i) => i === index ? !val : false)
    );
  }


  selectService(serviceName: string) {
  this.selectedService.set(serviceName);
  this.mainDropdownOpen.set(false);
  this.subDropdownOpen.set(new Array(this.services.length).fill(false));

  // إزالة رسالة الخطأ فور اختيار الخدمة
  const controlservice = this.forminit.get('service');
  if (controlservice) {
    controlservice.markAsTouched();  // أو reset() حسب احتياجك
    controlservice.setErrors(null);  // إزالة أي errors
  }
}


}




















//////////////////







