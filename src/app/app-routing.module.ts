import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard], children: [
      { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } },
      { path: 'edit', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } }
    ]
  },
  { path: 'contact/:id', component: ContactDetailsPageComponent, canActivate: [AuthGuard], resolve: { contact: ContactResolverService } },
  { path: 'statistics', component: StatisticsPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'auth/:mode', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
