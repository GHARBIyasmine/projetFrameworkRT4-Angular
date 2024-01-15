import { Component } from '@angular/core';
import { SidenavbarService } from './sidenavbar/services/sidenavbar.service';
import { Observable } from 'rxjs';

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
