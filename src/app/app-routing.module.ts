

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES, GROUP_ROUTES } from './config/app-routes.config';

import { MygroupesComponent } from './pages/mygroupes-page/mygroupes/mygroupes.component';
import { InboxComponent } from './pages/inbox-page/inbox/inbox.component';
import { ExploreComponent } from './pages/explore-page/explore/explore.component';
import { AgendaComponent } from './pages/agenda-page/agenda/agenda.component';
import { SettingsComponent } from './pages/settings-page/settings/settings.component';

import { EmailDetailComponent } from './pages/inbox-page/mailbox/email-detail/email-detail.component';
import { LandingComponent } from './pages/landing-page/landing/landing.component';
import { GroupeComponent } from './pages/mygroupes-page/groupe/group-view/groupe.component';
import { TaskboardComponent } from './pages/mygroupes-page/groupe/group-subpages/task-page/taskboard/taskboard.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { Nf404Component } from './view/error-view/nf404/nf404.component';
import { LoginComponent } from './view/auth-view/login-page/login.component';
import { RegisterComponent } from './view/auth-view/register-page/register.component';





const routes: Routes = [

  { path: '', component: LandingComponent },
  

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardViewComponent, 
  children: 
    [   { path: '', redirectTo: APP_ROUTES.groupes, pathMatch: 'full'},
        { path: APP_ROUTES.groupes, 
          children: [
            { path: '', component: MygroupesComponent }, 
            { path: APP_ROUTES.group, component: GroupeComponent,
              children:[
                  { path: '', redirectTo: GROUP_ROUTES.tasks, pathMatch: 'full'},
                  { path: GROUP_ROUTES.tasks, component: TaskboardComponent},
            ]},
          ],

        
        
        },
        

        { path: APP_ROUTES.inbox,
          children : [
            { path: '', component: InboxComponent },
            { path: 'email/:id', component: EmailDetailComponent },
          ] },
        { path: APP_ROUTES.explore, component: ExploreComponent  },
        { path: APP_ROUTES.agenda, component: AgendaComponent },
        { path: APP_ROUTES.settings, component: SettingsComponent},

  
    ]
  },
  
  { path: '**' , component:Nf404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
