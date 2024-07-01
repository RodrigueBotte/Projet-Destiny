import { Injectable } from '@angular/core';
import { actualite } from '../../ressources/actu';
import { ACTU } from '../../ressources/actuList';
import { Observable, of } from 'rxjs';
import { raid } from '../../ressources/raid';
import { RAID } from '../../ressources/raidList';
import { guide } from '../../ressources/guide';
import { GUIDE } from '../../ressources/guideList';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor() { }

  // this function serve to get information from actuList.ts
  getActualites(): Observable<actualite[]> {
    return of(ACTU);
  }

  // fonction servant à récuperer les informations provenant de raidList.ts
  getRaid(): Observable<raid[]> {
    return of (RAID);
  }

  getGuide(): Observable<guide[]>{
    return of (GUIDE);
  }
}
