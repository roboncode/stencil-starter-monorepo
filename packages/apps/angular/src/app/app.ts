import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  MyComponent,
  UiInputGroup,
  UiInputGroupAddon,
  UiInputGroupInput,
  UiTooltip,
  UiTabs,
  UiTabList,
  UiTab,
  UiTabPanel,
  UiRadioGroup,
  UiRadio,
  UiToggleGroup,
  UiToggle,
  UiChipGroup,
  UiChip
} from '@components/angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MyComponent,
    UiInputGroup,
    UiInputGroupAddon,
    UiInputGroupInput,
    UiTooltip,
    UiTabs,
    UiTabList,
    UiTab,
    UiTabPanel,
    UiRadioGroup,
    UiRadio,
    UiToggleGroup,
    UiToggle,
    UiChipGroup,
    UiChip
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Components Demo');
  protected readonly currentTheme = signal<'light' | 'dark'>('light');
  protected passwordVisible = signal(false);

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  togglePasswordVisibility() {
    this.passwordVisible.update(v => !v);
  }

  ngOnInit() {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      this.setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark');
    }
  }
}
