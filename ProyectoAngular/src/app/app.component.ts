import { Component } from '@angular/core';
// import * as $ from 'jquery';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'titulazo';
}
