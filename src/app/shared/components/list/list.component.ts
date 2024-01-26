import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>;
  @Input() items!: any[];

}
