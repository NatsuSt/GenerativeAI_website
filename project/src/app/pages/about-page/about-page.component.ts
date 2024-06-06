import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnDestroy{
    ngOnDestroy(): void {
      window.location.reload();
    }

}
