import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {


  constructor(private paisService: PaisService) { 
  }

  ngOnInit(): void {
  }

  

  get results(): Country[] {
    return this.paisService.results;
  }

  country: string = "";

  searchCountries() {
    this.paisService.searchCountries(this.country);
    this.country = "";
  }

}
