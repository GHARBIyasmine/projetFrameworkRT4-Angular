import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_ROUTES, GROUP_ROUTES } from 'src/app/config/app-routes.config';
import { SVG } from 'src/assets/svg/icons.svg';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.css']
})
export class HorizontalNavbarComponent {

  constructor(private sanitizer: DomSanitizer,
    
    ) {

}

  public tabs = [
    { text: 'Chat',
     icon: this.sanitizer.bypassSecurityTrustHtml(SVG.chat),
     route : GROUP_ROUTES.chat},

    { text: 'Files', 
      icon: this.sanitizer.bypassSecurityTrustHtml(SVG.document),
      route : GROUP_ROUTES.files},

    { text: 'Tasks', 
      icon: this.sanitizer.bypassSecurityTrustHtml(SVG.tasks) ,
      route : GROUP_ROUTES.tasks
       },
];

  activeTab: string = this.tabs[0].text;
  indicatorWidth: string = '0';

  
}
