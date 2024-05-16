import { Component } from '@angular/core';
import {SvgPicturesComponent} from "./svg-pictures/svg-pictures.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SvgPicturesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
