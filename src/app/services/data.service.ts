import { Injectable } from '@angular/core';
import { COLLEGUES } from '../mock/collegues.mock';
import { matriculesMock } from '../mock/matricule.mock';
import {Collegue} from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeMatricules = [];
  collegue;

  constructor() { }

  rechercherParNom(nom: string): string[] {
    this.listeMatricules = matriculesMock;
    return this.listeMatricules;

    }

  recupererCollegueCourant(): Collegue {
    this.collegue = COLLEGUES[0];
    return this.collegue;
  }
}
