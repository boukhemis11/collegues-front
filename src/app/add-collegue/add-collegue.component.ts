import { Component, OnInit } from '@angular/core';
import { CollegueAdd } from '../models/CollegueAdd';
import { DataService } from '../services/data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-collegue',
  templateUrl: './add-collegue.component.html',
  styleUrls: ['./add-collegue.component.css']
})
export class AddCollegueComponent implements OnInit {
  collegueForm:FormGroup;
  col: CollegueAdd = {};
  submitted = false;


  constructor(private dataService: DataService) { }

  saveCollegue() {

    const data = {
      nom: this.col.nom,
      prenoms: this.col.prenoms,
      dateDeNaissance: this.col.dateDeNaissance,
      email: this.col.email,
      photoUrl: this.col.photoUrl,
    };

    this.dataService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }



  ngOnInit(): void {
  }

}
