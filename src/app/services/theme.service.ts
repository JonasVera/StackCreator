import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }


  setPrimaryColor(color: string) {
    document.documentElement.style.setProperty('--primary-color', color);
  }

  setSecondaryColor(color: string) {
    document.documentElement.style.setProperty('--secondary-color', color);
  }

}
