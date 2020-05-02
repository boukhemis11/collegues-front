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
  afficherCollegue: Boolean;
  collegue: Collegue;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getGallerie()
    .subscribe(data => {this.photos = data, console.log(this.photos) });
    this.afficherCollegue =false;
  }

  chargerCollegue(mat:string){
    console.log(mat)
    this.dataService.recupererCollegueParMat(mat)
    .subscribe(data => {this.collegue = data,    console.log(data)});
    this.afficherCollegue =true;
  }

}
