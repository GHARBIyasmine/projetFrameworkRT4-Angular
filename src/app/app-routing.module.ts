import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './config/app-routes.config';
import { MygroupesComponent } from './pages/mygroupes-page/mygroupes/mygroupes.component';
import { InboxComponent } from './pages/inbox-page/inbox/inbox.component';
import { ExploreComponent } from './pages/explore-page/explore/explore.component';
import { AgendaComponent } from './pages/agenda-page/agenda/agenda.component';
import { SettingsComponent } from './pages/settings-page/settings/settings.component';
import { PopupComponent } from './shared/components/popup/popup.component';
import { EmailDetailComponent } from './pages/inbox-page/mailbox/email-detail/email-detail.component';
import { LandingComponent } from './pages/landing-page/landing/landing.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: APP_ROUTES.groupes, component: MygroupesComponent },
  { path: APP_ROUTES.inbox, component: InboxComponent },
  { path: APP_ROUTES.explore, component: ExploreComponent },
  { path: APP_ROUTES.agenda, component: AgendaComponent },
  { path: APP_ROUTES.settings, component: SettingsComponent },
  { path: 'popup', component: PopupComponent},
  { path: 'email/:id', component: EmailDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
