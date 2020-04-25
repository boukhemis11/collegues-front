import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue[];
  coll: Collegue[];
  show = true;
  mod = false;

  constructor() {
   }

  modifier(c: Collegue) {
    this.coll = this.coll.filter(e => e === c);
    this.mod = true;
    this.show = false;
  }

  valide(){
    this.coll = this.col;
    this.mod = false;
    this.show = true;
  }

  ajouter() {
    console.log('Ajouter un collègue');
  }

  ngOnInit(): void {
    this.coll = this.col;
  }
}
