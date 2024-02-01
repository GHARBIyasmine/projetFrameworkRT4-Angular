
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES, GROUP_ROUTES } from './config/app-routes.config';
import { MygroupesComponent } from './pages/mygroupes-page/mygroupes/mygroupes.component';
import { InboxComponent } from './pages/inbox-page/inbox/inbox.component';
import { ExploreComponent } from './pages/explore-page/explore/explore.component';
import { AgendaComponent } from './pages/agenda-page/agenda/agenda.component';
import { SettingsComponent } from './pages/settings-page/settings/settings.component';
import { GroupeComponent } from './pages/mygroupes-page/groupe/group-view/groupe.component';
import { TaskboardComponent } from './pages/mygroupes-page/groupe/group-subpages/task-page/taskboard/taskboard.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { Nf404Component } from './view/error-view/nf404/nf404.component';
import { LoginComponent } from './view/auth-view/login-page/login.component';
import { RegisterComponent } from './view/auth-view/register-page/register.component';
import { authGuard } from './core/guards/auth.guard';




const routes: Routes = [

  { path: APP_ROUTES.login, component: LoginComponent },
  { path: APP_ROUTES.register, component: RegisterComponent },
  { path: APP_ROUTES.dashboard, component: DashboardViewComponent, 
    canActivateChild: [authGuard],
    data: { breadcrumb: { skip: true } },
  children: 
    [   { path: '', redirectTo: APP_ROUTES.groupes, pathMatch: 'full'},
        { path: APP_ROUTES.groupes, 
          data: { breadcrumb: 'My groupes' },
          children: [
            { path: '', component: MygroupesComponent }, 
            { path: APP_ROUTES.group + '/:groupid', component: GroupeComponent,
            data: {
              breadcrumb: {
                alias: 'groupName'
              }
            },
              children:[
                  { path: '', redirectTo: GROUP_ROUTES.tasks, pathMatch: 'full'},
                  { path: GROUP_ROUTES.tasks, component: TaskboardComponent, data: { breadcrumb: { skip: true } }},
               
            ]},
          ],

        
        
        },
        

        { path: APP_ROUTES.inbox, component: InboxComponent, data: { breadcrumb: 'Inbox' }},
        { path: APP_ROUTES.explore, component: ExploreComponent ,data: { breadcrumb: 'Explore' } },
        { path: APP_ROUTES.agenda, component: AgendaComponent, data: { breadcrumb: 'Agenda' }},
        { path: APP_ROUTES.settings, component: SettingsComponent, data: { breadcrumb: 'Settings' }},

  
    ]
  },
  
  { path: '**' , component:Nf404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
