import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue[];
  show: boolean = true;
  mod: boolean = false;

  constructor() {

   }

  modifier() {
    this.mod=true;
    this.show=false;
  }

  valide(){
    this.mod=false;
    this.show=true;
  }

  ajouter() {
    console.log('Ajouter du collègue');
  }

  ngOnInit(): void {

  }
}
