import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collegue;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.abonnementCollegueEnCours()
    .subscribe(collegueSelect => this.collegue = collegueSelect);
  }

}
