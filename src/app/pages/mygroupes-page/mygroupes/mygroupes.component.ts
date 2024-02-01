import { Component, OnInit } from '@angular/core';
import { GroupInitialInfoI, GroupService } from '../../../core/services/group.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-mygroupes',
  templateUrl: './mygroupes.component.html',
  styleUrls: ['./mygroupes.component.css']
})
export class MygroupesComponent implements OnInit{
 
  groups : GroupInitialInfoI[]=[];
  private groupAddedSubscription: Subscription;
  private groupleftSubscription: Subscription;


  constructor(
    private groupService:GroupService,
    private toaster : ToastrService
  ){
    this.groupAddedSubscription = this.groupService.groupAdded$
    .pipe(takeUntilDestroyed())
    .subscribe({
      next: newGroup => {
        this.groups.push(newGroup);
      },
      error: error => {
        console.error('Error subscribing to groupAdded$: ', error);
      }
    });

    this.groupleftSubscription = this.groupService.groupLeft$
    .pipe(takeUntilDestroyed())
    .subscribe({
      next: groupId => {
        const index = this.groups.findIndex(group => group.id === groupId);
        this.groups.splice(index,1);
      }
    })
  }

  ngOnInit(): void {
    this.groupService.getAllGroupsByUser().subscribe({
      next: (groups)=>{
        this.groups= groups
      },
      error: (error)=>{

        this.toaster.error('Problem : Access failed to API:( ')
      }
    }
    )
 }



  isSubMenuActive : boolean = false;

  toggleSubMenu() {
    this.isSubMenuActive = !this.isSubMenuActive;
  }



  clickedOutside(){
    this.isSubMenuActive = false
    
  }
}
