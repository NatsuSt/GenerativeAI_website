import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-svg-pictures',
  standalone: true,
  imports: [],
  templateUrl: './svg-pictures.component.html',
  styleUrl: './svg-pictures.component.css'
})
export class SvgPicturesComponent {
  @Input() svgID: number = 0;
}
