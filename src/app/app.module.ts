import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';

import { ListComponent } from './shared/components/list/list.component';
import { TagComponent } from './shared/components/tag/tag.component';
import { PopupComponent } from './shared/components/popup/popup.component';
import { MygroupesComponent } from './pages/mygroupes-page/mygroupes/mygroupes.component';
import { MygroupesCardComponent } from './pages/mygroupes-page/mygroupes-card/mygroupes-card.component';
import { InboxComponent } from './pages/inbox-page/inbox/inbox.component';
import { ExploreComponent } from './pages/explore-page/explore/explore.component';
import { AgendaComponent } from './pages/agenda-page/agenda/agenda.component';
import { SettingsComponent } from './pages/settings-page/settings/settings.component';
import { GroupeComponent } from './pages/mygroupes-page/groupe/groupe.component';
import { SidenavbarComponent } from './layout/sidenavbar/sidenavbar.component';
import { TopheaderComponent } from './layout/topheader/topheader.component';
import { UserprofileComponent } from './layout/userprofile/userprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    TopheaderComponent,
    UserprofileComponent,
    MygroupesComponent,
    MygroupesCardComponent,
    ListComponent,
    TagComponent,
    InboxComponent,
    ExploreComponent,
    AgendaComponent,
    SettingsComponent,
    GroupeComponent,
    PopupComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BreadcrumbsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
