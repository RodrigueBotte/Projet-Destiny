import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrl: './actu.component.css'
})
export class ActuComponent {
  imageMaintenance: string = "../../../assets/imageActu/maintenance.png";
  imageResume : string ="../../../assets/imageActu/resume.png";
  
}
