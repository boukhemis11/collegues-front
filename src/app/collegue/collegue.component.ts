import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  //@Input() col: Collegue;
  col;
  modeModification = false;

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
    this.col = this.dataService.recupererCollegueCourant();
  }
}
