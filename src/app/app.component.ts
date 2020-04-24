import { Component, ViewChild, Input } from '@angular/core';
import { COLLEGUES } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  collegues = COLLEGUES;
}
