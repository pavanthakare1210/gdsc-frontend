import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'edu_theme';

  setDark(dark: boolean) {
    if (dark) { document.body.classList.add('dark'); localStorage.setItem(this.key,'dark'); }
    else { document.body.classList.remove('dark'); localStorage.setItem(this.key,'light'); }
  }
  isDark(): boolean { return localStorage.getItem(this.key) === 'dark'; }
  loadTheme() { const t = localStorage.getItem(this.key); if (t === 'dark') document.body.classList.add('dark'); else document.body.classList.remove('dark'); }
}
