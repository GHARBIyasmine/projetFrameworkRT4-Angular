import { Component, Input } from '@angular/core';
import { TAG_COLORS } from 'src/app/config/colors.config';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  @Input() tagValue!: string;  
  @Input() tagStyle: string = 'detail'; // Default style is 'detail'
  tagColors: any = TAG_COLORS;
  

}
