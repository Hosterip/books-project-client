import {Component} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'theme-switcher',
  standalone: true,
  imports: [
    ButtonComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  themes = [
    {
      value: 'light',
      checked: true
    },
    {
      value: 'dark',
      checked: false
    },
  ]

  ngOnInit() {
    const themeName = localStorage.getItem('theme')
    if(!themeName && window?.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.setAttribute("data-theme", 'dark')
      this.changeActiveTheme('dark')
      return
    }
    this.changeActiveTheme(themeName!)
    document.body.setAttribute("data-theme", themeName!)
  }

  changeTheme(themeName: string) {
    this.changeActiveTheme(themeName)
    localStorage.setItem('theme', themeName)
    document.body.setAttribute("data-theme", themeName)
  }

  isOpen: boolean = false;

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  changeActiveTheme (themeName: string) {
    this.themes.map(item => {
      const newItem = item;
      newItem.checked = item.value == themeName
      return newItem;
    })
  }
}
