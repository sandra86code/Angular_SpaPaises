import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  query: string = "";
  @Output() onNewQuery:EventEmitter<string> = new EventEmitter();

  searchCountries() {
    this.onNewQuery.emit(this.query);
    this.query="";
  }
}
