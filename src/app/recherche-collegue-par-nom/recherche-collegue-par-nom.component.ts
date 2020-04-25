import { Component, OnInit } from '@angular/core';
import { COLLEGUES } from '../mock/collegues.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  collegues = COLLEGUES;
  mat = [];
  lname = [];
  res = false;

  search(mot){
    this.mat = [];
    this.lname = [];
    for (let c of this.collegues) {
      if ( c.nom === mot){
        this.mat.push(c.matricule);
        this.lname.push(c.prenoms);
        this.res = true;
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
