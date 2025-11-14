import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Auth {



  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  saveFormData(data: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('formData', JSON.stringify(data));
    }
  }

  getFormData(): any {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('formData');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  }

  clearFormData(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('formData');
    }
  }

// private readonly cookieService=inject(CookieService)

  // saveFormData(data: any): void {
  //   const userData = JSON.stringify(data);
  //   this.cookieService.set('formData', userData);
  // }

  // getFormData(): any {
  //   const userData = this.cookieService.get('formData');
  //   return userData ? JSON.parse(userData) : null;
  // }

  // clearFormData(): void {
  //   this.cookieService.delete('formData');
  // }

}
