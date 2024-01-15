import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './config/app-routes.config';
import { MygroupesComponent } from './mygroupes-page/mygroupes/mygroupes.component';
import { InboxComponent } from './inbox-page/inbox/inbox.component';
import { ExploreComponent } from './explore-page/explore/explore.component';
import { AgendaComponent } from './agenda-page/agenda/agenda.component';
import { SettingsComponent } from './settings-page/settings/settings.component';

const routes: Routes = [
  { path: '', component: MygroupesComponent },
  { path: APP_ROUTES.groupes, component: MygroupesComponent },
  { path: APP_ROUTES.inbox, component: InboxComponent },
  { path: APP_ROUTES.explore, component: ExploreComponent },
  { path: APP_ROUTES.agenda, component: AgendaComponent },
  { path: APP_ROUTES.settings, component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
