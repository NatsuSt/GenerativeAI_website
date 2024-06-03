import { Component } from '@angular/core';
import {SvgPicturesComponent} from "./svg-pictures/svg-pictures.component";
import {EventComp} from "./shared/EventClass";
import {EventsComponent} from "./events/events.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SvgPicturesComponent,
    EventsComponent,
    NgForOf
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
}
