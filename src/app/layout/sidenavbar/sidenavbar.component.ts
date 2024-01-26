import { Component } from '@angular/core';
<<<<<<< HEAD
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SidenavbarService } from './services/sidenavbar.service';
import { SVG } from 'src/assets/svg/icons.svg';

import { Router } from '@angular/router';
=======
import { DomSanitizer } from '@angular/platform-browser';
import { SidenavbarService } from './services/sidenavbar.service';
import { SVG } from 'src/assets/svg/icons.svg';
>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {
<<<<<<< HEAD
  constructor(private sanitizer: DomSanitizer,
              private sideNavBarService: SidenavbarService,
              ) {

=======

 
  constructor(private sanitizer: DomSanitizer,
              private sideNavBarService: SidenavbarService,
              ) {
    
>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1
  }


  public activeIndex: number | null = null;
  public isSideBarCollapsed = false;
<<<<<<< HEAD
  
=======

>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1

  togglebtn =  this.sanitizer.bypassSecurityTrustHtml(SVG.arrow);
  public menus = [
        { text: 'My Groupes',
         icon: this.sanitizer.bypassSecurityTrustHtml(SVG.groupe),
         route : APP_ROUTES.groupes},

<<<<<<< HEAD
        { text: 'Inbox', 
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.inbox),
          route : APP_ROUTES.inbox},

        { text: 'Explore', 
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.explore) ,
          route : APP_ROUTES.explore},
        { text: 'Agenda', 
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.agenda) ,
          route : APP_ROUTES.agenda},
          { text: 'Settings', 
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.settings) ,
          route : APP_ROUTES.settings},
=======
        { text: 'Inbox',
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.inbox),
          route : APP_ROUTES.inbox},

        { text: 'Explore',
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.explore) ,
          route : APP_ROUTES.explore},
        { text: 'Agenda',
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.agenda) ,
          route : APP_ROUTES.agenda},
          { text: 'Settings',
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.settings) ,
          route : APP_ROUTES.settings},

          {text: 'Log Out',
          icon: this.sanitizer.bypassSecurityTrustHtml(SVG.logOut) }
>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1
  ];

  toggleSidebar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    this.sideNavBarService.setCollapsedState(this.isSideBarCollapsed);

<<<<<<< HEAD
    
  }
  
  

  
=======

  }




>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1

}
