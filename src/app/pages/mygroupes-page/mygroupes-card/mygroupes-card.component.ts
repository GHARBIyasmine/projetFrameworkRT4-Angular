import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarGeneratorService } from 'src/app/core/services/avatar-generator.service';
import { GroupInitialInfoI } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-mygroupes-card',
  templateUrl: './mygroupes-card.component.html',
  styleUrls: ['./mygroupes-card.component.css']
})
export class MygroupesCardComponent implements OnInit{
  @Input() group! :  GroupInitialInfoI;
  isDotsSubmenuActive: boolean = false;
  parentRoute!: string;
  groupInitials='';

  

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private avatarGeneratorService: AvatarGeneratorService,
    ){
  }
 ngOnInit(): void {
  this.groupInitials= this.avatarGeneratorService.generateInitials(this.group.name); 
   
 }

  toggleDotsSubmenu(): void {
    this.isDotsSubmenuActive = !this.isDotsSubmenuActive;
  }

  clickedOutside(){
    this.isDotsSubmenuActive = false
  }
  onCardClick() {
  
    this.router.navigate(['group/', this.group.id],{relativeTo: this.activatedRoute});
  }
}
