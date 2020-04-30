import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Gallerie } from '../models/Gallerie';


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

  create(data) {
    console.log(data)
    return this.http.post(this.URL_BACKEND, data);
  }

  getGallerie():Observable<Gallerie[]>{
    return this.http.get<Gallerie[]>("https://digicapi.herokuapp.com/collegues/photos");

  }

  recupererCollegueParMat(matricule: string): Observable<Collegue> {
     return this.http.get<Collegue>("https://digicapi.herokuapp.com/collegues/" + matricule);
  }
}
