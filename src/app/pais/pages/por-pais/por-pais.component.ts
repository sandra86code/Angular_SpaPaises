import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisService) { 
    
  }

  ngOnInit(): void {
  }

  query: string = "";

  searchCountries () {
    this.paisService.searchCountries(this.query);
    this.query = "";
  }
  
  get results(): Country[] {
    return this.paisService.results;
  }

  get errors() : boolean{
    return this.paisService.errors;
  }
}
