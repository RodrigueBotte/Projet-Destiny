import { Injectable } from '@angular/core';
import { actualite } from '../../ressources/actu';
import { ACTU } from '../../ressources/actuList';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor() { }

  getActualites(): Observable<actualite[]> {
    return of(ACTU);
  }
}
