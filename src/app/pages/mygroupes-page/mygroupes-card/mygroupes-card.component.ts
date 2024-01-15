import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mygroupes-card',
  templateUrl: './mygroupes-card.component.html',
  styleUrls: ['./mygroupes-card.component.css']
})
export class MygroupesCardComponent {
  @Input() data :any;
  
  onCardClick() {
    
  }
}
