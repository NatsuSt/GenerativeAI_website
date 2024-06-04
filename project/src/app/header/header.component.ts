import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSd2hbVfsIr0XkfOG_widISRF1tm0mDfY1u4yGQpiedkiPMZIQ/viewform?usp=sf_link';

  navigateToForm() {
    window.open(this.formLink, '_blank')
  }

  scrollToBegin() {
    window.scrollTo(0,0);
  }
}
