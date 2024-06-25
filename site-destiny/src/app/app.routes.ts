import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActuComponent } from './actu/actu.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "", component: AccueilComponent},
    {path: "actuPath", component: ActuComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }