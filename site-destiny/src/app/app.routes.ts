import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActuComponent } from './actu/actu.component';
import { NgModule } from '@angular/core';
import { BuildComponent } from './build/build.component';
import { RaidPlanningComponent } from './raid-planning/raid-planning.component';
import { GuideComponent } from './guide/guide.component';

export const routes: Routes = [
    {path: "", component: AccueilComponent},
    {path: "actuPath", component: ActuComponent},
    {path: "buildPath", component: BuildComponent},
    {path: "raidPath", component: RaidPlanningComponent},
    {path: "guidePath", component: GuideComponent},
    {path: "accueilPath", component: AccueilComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }