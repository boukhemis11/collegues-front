import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../models/Collegue';
import { DataService } from '../services/data.service';
import { CollegueEdit } from '../models/collegueEdit';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col: Collegue ;
  modeModif = false;
  show = false;
  error = false;
  submit = false;
  public collegue: CollegueEdit = {} ;

  constructor(private dataService: DataService) {
   }

  modifier() {
    this.modeModif = true;
  }

  valider(){
    this.modeModif = false;
    if (this.collegue.email && this.collegue.photoUrl.length > 7){
      this.error = false;
      this.show = true;
      this.modeModif = false;
      console.log(this.collegue);
      this.dataService.modificationCollegue(this.collegue, this.col.matricule).subscribe(
        collegue => {this.col = collegue,   this.refresh() }

      )

    }else{
      this.error = true;
    }
  }

  refresh() {
    this.dataService.abonnementCollegueEnCours()
      .subscribe(collegueSelect => {this.col = collegueSelect , this.show=true});
  }

  ajouter() {
    console.log('Ajouter un collègue');
  }

  ngOnInit(): void {
    this.dataService.abonnementCollegueEnCours()
      .subscribe(collegueSelect => {this.col = collegueSelect , this.show=true});
  }
}
