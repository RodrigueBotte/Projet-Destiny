import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from '../accueil/accueil.component';
import { ActuComponent } from '../actu/actu.component';
import { BuildComponent } from '../build/build.component';
import { GuideComponent } from '../guide/guide.component';
import { RaidPlanningComponent } from '../raid-planning/raid-planning.component';
import { AppRoutingModule } from '../app.routes';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AccueilComponent,
    ActuComponent,
    BuildComponent,
    GuideComponent,
    RaidPlanningComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ]
})
export class AppModule { }
