import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raid-planning',
  templateUrl: './raid-planning.component.html',
  styleUrl: './raid-planning.component.css'
})
export class RaidPlanningComponent {
  constructor(private router: Router){}
  
  goToActu(){
    // test pour voir si le click se déclenche bien 
    console.log('bonjour');
    // Chemin permettant d'aller à la section actu 
    this.router.navigate(['./actuPath'])
  }
  goToBuild(){
    this.router.navigate(['./buildPath'])
  }
  goToRaid(){
    this.router.navigate(['./raidPath'])
  }
  goToGuide(){
    this.router.navigate(['./guidePath'])
  }
  goToAccueil(){
    this.router.navigate(['./accueilPath'])
  }
}
