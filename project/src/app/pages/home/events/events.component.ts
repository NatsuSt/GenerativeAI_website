import {Component, Input} from '@angular/core';
import {EventComp} from "../shared/EventClass";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  @Input() eventComp!: EventComp;
}
