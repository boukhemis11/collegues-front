import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegue = new Subject<Collegue>();

  URL_BACKEND = environment.backendUrl;

  listeMatricules = [];
  collegue;

  constructor(private http: HttpClient) { }

  abonnementCollegueEnCours(): Observable<Collegue> {
    return this.subCollegue.asObservable();
  }

  selectionnerCollegue(mat) {
    this.http.get<Collegue>(this.URL_BACKEND + '/' + mat).subscribe(c => {this.subCollegue.next(c)});
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(this.URL_BACKEND + '?nom=' + nom);
  }

  recupererCollegueCourant(): Collegue {
    this.collegue = this.http.get(this.URL_BACKEND);
    return this.collegue;
  }
}
