import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

import {SvgPicturesComponent} from "./svg-pictures/svg-pictures.component";
import {CommentsComponent} from "./comments/comments.component";
import {EventsComponent} from "./events/events.component";
import {EventComp} from "./shared/EventClass";
import {Comment} from "./shared/Comment";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SvgPicturesComponent,
    EventsComponent,
    NgForOf,
    CommentsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: EventComp[] = [
    new EventComp(
      'Reverze 2024 - The 20th Anniversary',
      'Antwerpen',
      '20:00 - 07:00',
      'Friday',
      'March',
      '01',
    ),
    new EventComp(
      'RAWdefinition',
      'Zwolle',
      '22:00 - 04:00',
      'Saturday',
      'March',
      '02',
      true
    ),
    new EventComp(
      'Spearhead club event uptempo',
      'Seoul',
      '20:00 - 07:00',
      'Sunday',
      'March',
      '03'
    ),
    new EventComp(
      'Don\'t Let Daddy Know Amsterdam',
      'Amsterdam',
      '20:00 - 07:00',
      'Monday',
      'March',
      '04',
      true
    ),
    new EventComp(
      'Realm of Posyden - Enigmatic Depths',
      'Groningen',
      '20:00 - 07:00',
      'Friday',
      'March',
      '12'
    )
  ]
  comments: Comment[] = [
    new Comment('Keith W.', 3, 'Lorem ipsum dolor sit amet consectetur. Enim dictum amet eleifend sit sit eu ut.'),
    new Comment('Keith W.', 3, 'Lorem ipsum dolor sit amet consectetur. Enim dictum amet eleifend sit sit eu ut.'),
    new Comment('Keith W.', 3, 'Lorem ipsum dolor sit amet consectetur. Enim dictum amet eleifend sit sit eu ut.'),
    new Comment('Keith W.', 3, 'Lorem ipsum dolor sit amet consectetur. Enim dictum amet eleifend sit sit eu ut.'),
    new Comment('Keith W.', 3, 'Lorem ipsum dolor sit amet consectetur. Enim dictum amet eleifend sit sit eu ut.'),
  ]

  texts: string[] = [
    'unites AI innovations',
    'offers exclusive AI insights',
    'connects you with Al leaders',
    'advances your Al projects'
  ];
  formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSd2hbVfsIr0XkfOG_widISRF1tm0mDfY1u4yGQpiedkiPMZIQ/viewform?usp=sf_link';
  typingDelay: number = 100;
  erasingDelay: number = 50;
  newTextDelay: number = 2000; // Задержка перед началом печати нового текста

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.startTyping();
  }

  navigateToForm() {
    window.open(this.formLink, '_blank')
  }

  navigateToAbout() {
    this.router.navigate(['/about']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  async typeText(text: string, elementId: string, delay: number): Promise<void> {
    const element = document.getElementById(elementId);
    if (!element) return;

    for (let i = 0; i < text.length; i++) {
      element.textContent += text[i];
      await this.delay(delay);
    }
  }

  async eraseText(elementId: string, delay: number): Promise<void> {
    const element: HTMLElement | null = document.getElementById(elementId);
    if (!element) return;

    while (element.textContent!.length > 0) {
      element.textContent = element.textContent!.slice(0, -1);
      await this.delay(delay);
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startTyping(): Promise<void> {
    while (true) {
      const randomText = this.texts[Math.floor(Math.random() * this.texts.length)];
      await this.typeText(randomText, 'typewriter-text', this.typingDelay);
      await this.delay(this.newTextDelay);
      await this.eraseText('typewriter-text', this.erasingDelay);
      await this.delay(this.typingDelay);
    }
  }

}
