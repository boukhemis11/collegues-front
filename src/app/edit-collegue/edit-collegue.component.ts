import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-edit-collegue',
  templateUrl: './edit-collegue.component.html',
  styleUrls: ['./edit-collegue.component.css']
})
export class EditCollegueComponent implements OnInit {
  collegueForm: FormGroup;
  submitted = false;
  col;



  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  onSubmit() {
    this.submitted = true;
  }


  ngOnInit(): void {
    this.dataService.abonnementCollegueEnCours()
  .subscribe(collegueSelect =>  this.col = collegueSelect );
  }


}
