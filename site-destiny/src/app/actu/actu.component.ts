import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ACTU } from '../../../ressources/actuList';
import { actualite } from '../../../ressources/actu';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrl: './actu.component.css'
})
export class ActuComponent {
  actuList: actualite[] = [];
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

  ngOnInit(): void {
  this.getActualites();
  }

  getActualites(): void {
    this.actualiteService.getActualites().subscribe(actuList => this.actuList = actuList)
    console.log(this.actuList);
    
  }
  
}
