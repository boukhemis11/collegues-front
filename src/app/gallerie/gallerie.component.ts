import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Gallerie } from '../models/Gallerie';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  photos: Gallerie[] = [];
  afficherCollegue: boolean;
  collegue: Collegue;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getGallerie()
    .subscribe(data => this.photos = data);

    this.afficherCollegue = false;
  }

  chargerCollegue(mat:string){
    this.dataService.recupererCollegueParMat(mat)
    .subscribe(data => this.collegue = data);
    this.afficherCollegue = true;
  }

}
