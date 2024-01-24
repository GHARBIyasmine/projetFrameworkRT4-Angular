import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './config/app-routes.config';
import { MygroupesComponent } from './pages/mygroupes-page/mygroupes/mygroupes.component';
import { InboxComponent } from './pages/inbox-page/inbox/inbox.component';
import { ExploreComponent } from './pages/explore-page/explore/explore.component';
import { AgendaComponent } from './pages/agenda-page/agenda/agenda.component';
import { SettingsComponent } from './pages/settings-page/settings/settings.component';
import { LoginComponent } from "./view/dashboard-view/auth-view/login-page/login.component";
import { RegisterComponent } from "./view/dashboard-view/auth-view/register-page/register.component";
import { authGuard } from './guard/auth.guard';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: APP_ROUTES.groupes, pathMatch: 'full' },
      { path: APP_ROUTES.groupes, component: MygroupesComponent },
      { path: APP_ROUTES.inbox, component: InboxComponent },
      { path: APP_ROUTES.explore, component: ExploreComponent },
      { path: APP_ROUTES.agenda, component: AgendaComponent },
      { path: APP_ROUTES.settings, component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
