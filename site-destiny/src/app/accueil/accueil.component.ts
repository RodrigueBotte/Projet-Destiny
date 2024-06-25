import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  {
  constructor(public router: Router){}

  goToActu(){
    console.log('bonjour');
    
    this.router.navigate(['./actuPath'])
  }
}
