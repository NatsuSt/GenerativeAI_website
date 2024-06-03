import {Component, Input} from '@angular/core';

import {Comment} from "../shared/Comment";
import {NgForOf} from "@angular/common";
import {SvgPicturesComponent} from "../svg-pictures/svg-pictures.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgForOf,
    SvgPicturesComponent
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input() comment!: Comment;

  createArrayFromNumber(num: number): number[] {
    return Array(num);
  }
}
