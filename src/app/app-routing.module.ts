
import { GroupeComponent } from './pages/mygroupes-page/groupe/group-view/groupe.component';
import { TaskboardComponent } from './pages/mygroupes-page/groupe/group-subpages/task-page/taskboard/taskboard.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { Nf404Component } from './view/error-view/nf404/nf404.component';
import {RouterModule, Routes} from "@angular/router";
import {MygroupesComponent} from "./pages/mygroupes-page/mygroupes/mygroupes.component";
import {APP_ROUTES, GROUP_ROUTES} from "./config/app-routes.config";
import {InboxComponent} from "./pages/inbox-page/inbox/inbox.component";
import {ExploreComponent} from "./pages/explore-page/explore/explore.component";
import {SettingsComponent} from "./pages/settings-page/settings/settings.component";
import {AgendaComponent} from "./pages/agenda-page/agenda/agenda.component";
import {NgModule} from "@angular/core";



const routes: Routes = [
  { path: 'dashboard', component: DashboardViewComponent,
  children:
    [
        { path: APP_ROUTES.groupes,
          children: [
            { path: '', component: MygroupesComponent },
            { path: APP_ROUTES.group, component: GroupeComponent,
              children:[
                  { path: GROUP_ROUTES.tasks, component: TaskboardComponent},
            ]},
          ],


        },

        { path: APP_ROUTES.inbox, component: InboxComponent },
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
