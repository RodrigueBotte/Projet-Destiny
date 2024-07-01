import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActualiteService } from '../actualite.service';
import { raid } from '../../../ressources/raid';

@Component({
  selector: 'app-raid-planning',
  templateUrl: './raid-planning.component.html',
  styleUrl: './raid-planning.component.css'
})
export class RaidPlanningComponent {
  raidList: raid[] = [];
  constructor(private router: Router, private actualiteService: ActualiteService){}
  
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
  ngOnInit(): void{
    this.getRaid();
  }
  // appel de la fonction de récupération des informations de raidList
  getRaid():void{
    this.actualiteService.getRaid().subscribe(raidList=> this.raidList = raidList);
    console.log(this.raidList);
    
  }
}
