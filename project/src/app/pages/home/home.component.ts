import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {SvgPicturesComponent} from "./svg-pictures/svg-pictures.component";
import {EventComp} from "./shared/EventClass";
import {EventsComponent} from "./events/events.component";
import {Comment} from "./shared/Comment";
import {CommentsComponent} from "./comments/comments.component";
import {Router} from "@angular/router";

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
export class HomeComponent {
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

  formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSd2hbVfsIr0XkfOG_widISRF1tm0mDfY1u4yGQpiedkiPMZIQ/viewform?usp=sf_link';

  constructor(private router: Router) {
  }

  navigateToForm() {
    window.open(this.formLink, '_blank')
  }

  navigateToAbout() {
    this.router.navigate(['/about']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
