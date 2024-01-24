import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {SidenavbarService} from "../sidenavbar/services/sidenavbar.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  title = 'Peer+';

  sidenavbarWidth$!: Observable<boolean> ;

  constructor(private sidenavbarService: SidenavbarService) {
    this.sidenavbarWidth$ = this.sidenavbarService.collapsed$;
  }

}
