import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { ListComponent } from './shared/components/list/list.component';
import { TagComponent } from './shared/components/tag/tag.component';
import { MygroupesComponent } from './pages/mygroupes-page/mygroupes/mygroupes.component';
import { MygroupesCardComponent } from './pages/mygroupes-page/mygroupes-card/mygroupes-card.component';
import { InboxComponent } from './pages/inbox-page/inbox/inbox.component';
import { ExploreComponent } from './pages/explore-page/explore/explore.component';
import { AgendaComponent } from './pages/agenda-page/agenda/agenda.component';
import { SettingsComponent } from './pages/settings-page/settings/settings.component';

import { HeaderComponent } from './pages/landing-page/header/header.component';
import { FooterComponent } from './pages/landing-page/footer/footer.component';
import { FirstGridComponent } from './pages/landing-page/first-grid/first-grid.component';
import { SecondGridComponent } from './pages/landing-page/second-grid/second-grid.component';
import { MailboxComponent } from './pages/inbox-page/mailbox/mailbox.component';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { EmailDetailComponent } from './pages/inbox-page/mailbox/email-detail/email-detail.component';
import { LandingComponent } from './pages/landing-page/landing/landing.component';
import { GroupeComponent } from './pages/mygroupes-page/groupe/group-view/groupe.component';
import { SidenavbarComponent } from './layout/sidenavbar/sidenavbar.component';
import { TopheaderComponent } from './layout/topheader/topheader.component';
import { UserprofileComponent } from './layout/userprofile/userprofile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GroupMembershipSubmenuComponent } from './pages/mygroupes-page/group-membership-submenu/group-membership-submenu.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { JoinGroupComponent } from './pages/mygroupes-page/add-group/join-group/join-group.component';
import { CreateGroupComponent } from './pages/mygroupes-page/add-group/create-group/create-group.component';
import { ExploreCardsComponent } from './pages/explore-page/explore-cards/explore-cards.component';
import { TaskboardComponent } from './pages/mygroupes-page/groupe/group-subpages/task-page/taskboard/taskboard.component';
import { TaskComponent } from './pages/mygroupes-page/groupe/group-subpages/task-page/task/task.component';
import { AddTaskComponent } from './pages/mygroupes-page/groupe/group-subpages/task-page/add-task/add-task.component';
import {MatSelectModule} from '@angular/material/select';
import { HorizontalNavbarComponent } from './layout/horizontal-navbar/horizontal-navbar.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { Nf404Component } from './view/error-view/nf404/nf404.component';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http'; 

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ReactiveFormsModule} from "@angular/forms";
import { ProfileItemComponent } from './pages/settings-page/profile-item/profile-item.component';
import { PictureProfileItemComponent } from './shared/components/picture-profile-item/picture-profile-item.component';
import {LoginComponent} from './view/auth-view/login-page/login.component'
import {RegisterComponent} from './view/auth-view/register-page/register.component';





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
    HeaderComponent,
    FooterComponent,
    FirstGridComponent,
    SecondGridComponent,
    MailboxComponent,
    EmailDetailComponent,
    LandingComponent,
    ProfileItemComponent,
    PictureProfileItemComponent,
    LoginComponent,
    RegisterComponent,
    GroupMembershipSubmenuComponent,
    ClickOutsideDirective,
    JoinGroupComponent,
    CreateGroupComponent,
    ExploreCardsComponent,
    TaskboardComponent,
    TaskComponent,
    AddTaskComponent,
    HorizontalNavbarComponent,
    DashboardViewComponent,
    Nf404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BreadcrumbsModule.forRoot(),
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    HttpClientModule,

    //Angualr Material imports
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    DragDropModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
