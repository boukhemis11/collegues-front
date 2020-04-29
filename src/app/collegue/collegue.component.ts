import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col: Collegue ;
  modeModification = false;
  show=false;

  constructor(private dataService: DataService) {
   }

  modifier() {
    this.modeModification = true;
  }

  valide(){
    this.modeModification = false;
  }

  ajouter() {
    console.log('Ajouter un collègue');
  }

  ngOnInit(): void {
    this.dataService.abonnementCollegueEnCours()
      .subscribe(collegueSelect => {this.col = collegueSelect , this.show=true});
  }
}
