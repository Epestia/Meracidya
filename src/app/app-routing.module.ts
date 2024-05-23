import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Assurez-vous d'importer le composant AppComponent
import { AccueilComponent } from './accueil/accueil.component'; 
import { JobsComponent } from './jobs/jobs.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection vers AccueilComponent quand l'URL de base est chargée
  { path: 'accueil', component:  AccueilComponent },
  { path: 'jobs', component:  JobsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'personnages', component: PersonnagesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
