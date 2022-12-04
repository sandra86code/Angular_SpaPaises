import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchResponse';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() countries: Country[] = [];
}
