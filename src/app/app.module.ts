import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component'; 
import { ErrorComponent } from './shared/error/error.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { FightComponent } from './fight/fight.component';
import { EurekaComponent } from './eureka/eureka.component';
import { BozjaComponent } from './bozja/bozja.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    PersonnagesComponent,
    SigninComponent,
    AccueilComponent,
    AboutComponent,
    FightComponent,
    EurekaComponent,
    BozjaComponent,
    JobsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
