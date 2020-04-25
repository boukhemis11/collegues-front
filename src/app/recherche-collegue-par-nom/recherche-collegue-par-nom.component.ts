import { Component, OnInit } from '@angular/core';
import { COLLEGUES } from '../mock/collegues.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  collegues = COLLEGUES;
  m: string;
  name: string;
  res: boolean = false;

  search(mot){
    for (let c of this.collegues) {
      if ( c.nom === mot){
        this.m = c.matricule;
        this.name = c.nom;
        this.res = true;
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
