import { Component, OnInit } from '@angular/core';
import { COLLEGUES } from '../mock/collegues.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  collegues = COLLEGUES;
  m:string;

  search(mot){
    for (let c of this.collegues) {
      if ( c.nom === mot){
        this.m = c.matricule;
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
