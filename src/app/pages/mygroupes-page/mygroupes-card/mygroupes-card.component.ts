import { AfterViewInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/core/models/group.models';

@Component({
  selector: 'app-mygroupes-card',
  templateUrl: './mygroupes-card.component.html',
  styleUrls: ['./mygroupes-card.component.css']
})
export class MygroupesCardComponent{
  @Input() group! : Group;
  isDotsSubmenuActive: boolean = false;
  parentRoute!: string

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ){
     
  }


  toggleDotsSubmenu(): void {
    this.isDotsSubmenuActive = !this.isDotsSubmenuActive;
  }

  clickedOutside(){
    this.isDotsSubmenuActive = false
  }
  onCardClick() {
  
    this.router.navigate(['group'],{relativeTo: this.activatedRoute});
  }
}
