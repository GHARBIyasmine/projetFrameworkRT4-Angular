import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { SidenavbarService } from './layout/sidenavbar/services/sidenavbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetFrameworkRT4-Angular';

  sidenavbarWidth$!: Observable<boolean> ; 

  constructor(private sidenavbarService: SidenavbarService) {
      this.sidenavbarWidth$ = this.sidenavbarService.collapsed$;
  }

  
}
