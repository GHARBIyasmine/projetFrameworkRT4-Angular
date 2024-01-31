import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidenavbarService } from './services/sidenavbar.service';
import { SVG } from 'src/assets/svg/icons.svg';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {
  router: any;

 
  constructor(private sanitizer: DomSanitizer,
              private sideNavBarService: SidenavbarService,
              private userService: UserService,
              ) {
    
  }


  public activeIndex: number | null = null;
  public isSideBarCollapsed = false;


  togglebtn =  this.sanitizer.bypassSecurityTrustHtml(SVG.arrow);
  public menus = [
        { text: 'My Groupes',
         icon: this.sanitizer.bypassSecurityTrustHtml(SVG.groupe),
         route : APP_ROUTES.groupes},

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

  
  ];
  public logoutButton = { text: 'Log Out',icon: this.sanitizer.bypassSecurityTrustHtml(SVG.logOut)}; 
  toggleSidebar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    this.sideNavBarService.setCollapsedState(this.isSideBarCollapsed);
  }



  logout(): void {
    console.log('logout');
    this.userService.logout();
    this.router.navigate(['/login']);
  }



}
