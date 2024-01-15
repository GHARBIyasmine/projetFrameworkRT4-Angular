import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { MygroupesComponent } from './mygroupes-page/mygroupes/mygroupes.component';
import { MygroupesCardComponent } from './mygroupes-page/mygroupes-card/mygroupes-card.component';
import { ListComponent } from './components/list/list.component';
import { TagComponent } from './components/tag/tag.component';
import { InboxComponent } from './inbox-page/inbox/inbox.component';
import { ExploreComponent } from './explore-page/explore/explore.component';
import { AgendaComponent } from './agenda-page/agenda/agenda.component';
import { SettingsComponent } from './settings-page/settings/settings.component';
import { GroupeComponent } from './mygroupes-page/groupe/groupe.component';


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
