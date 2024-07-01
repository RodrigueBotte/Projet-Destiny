import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { guide } from '../../../ressources/guide'; 
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent implements OnInit {
  guideList: guide[] = [];
  constructor(private router: Router, private actualiteService: ActualiteService) { }

  goToAccueil() {
    this.router.navigate(['./accueilPath'])
  }
  goToBuild() {
    this.router.navigate(['./buildPath'])
  }
  goToActu() {
    this.router.navigate(['./actuPath'])
  }
  goToGuide() {
    this.router.navigate(['./guidePath'])
  }
  goToRaid() {
    this.router.navigate(['./raidPath'])
  }
  ngOnInit(): void {
    this.getGuide();
  }

  getGuide(): void {
    this.actualiteService.getGuide().subscribe(guideList => this.guideList = guideList)
    console.log(this.guideList);
  }
  
}
