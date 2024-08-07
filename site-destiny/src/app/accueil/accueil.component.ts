import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actualite } from '../../../ressources/actu';
import { ActualiteService } from '../actualite.service';
import { raid } from '../../../ressources/raid';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit { 
  actuList?: actualite;
  raidList?: raid ;
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
  this.getRaid();
  }

  getActualites(): void {
    this.actualiteService.getActualites().subscribe((actuList)=>{ this.actuList = actuList[0]})
    console.log(this.actuList);
  }
  getRaid():void{
    this.actualiteService.getRaid().subscribe((raidList)=> this.raidList = raidList[0]);
    console.log(this.raidList);
    
  }
  
}
