
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/core/models/group.models';
import { GroupService } from '../services/group.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-mygroupes',
  templateUrl: './mygroupes.component.html',
  styleUrls: ['./mygroupes.component.css']
})

export class MygroupesComponent implements OnInit{
 
  groupes! : Group[];

  constructor(
    private groupService:GroupService,
    private toaster : ToastrService
  ){}

  ngOnInit(): void {
    this.groupes =this.groupService.getFakeGroupes();
 }

  isSubMenuActive : boolean = false;

  toggleSubMenu() {
    this.isSubMenuActive = !this.isSubMenuActive;
  }



  clickedOutside(){
    this.isSubMenuActive = false
    
  }

}
