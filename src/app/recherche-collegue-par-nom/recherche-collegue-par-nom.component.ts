import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor(private dataService: DataService) { }

  listeMatricules = [];
  mot;
  coll;

  search(mot){
    this.dataService.rechercherParNom(mot)
    .subscribe(matricule => {
      this.listeMatricules = matricule;
    });

    console.log(this.listeMatricules);
  }

  getCollegue(mat){
    this.dataService.selectionnerCollegue(mat);
  }


  ngOnInit(): void {
  }

}
