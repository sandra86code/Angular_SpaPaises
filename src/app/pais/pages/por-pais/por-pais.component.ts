import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  
  countries: Country[]=[];
  errors: boolean = false;
  textError: string = "";

  constructor(private paisService: PaisService) { 
    
  }

  ngOnInit(): void {

  }


  searchCountries (query: string) {
    this.textError = query;
    this.paisService.searchCountries(query)
    .subscribe({
      next: (resp) => {
        this.countries = resp
        console.log(this.countries)
        this.errors = false;
      },
      error: (err) => {
        this.errors = true
        this.countries = []
      }
    })
    query = "";
  }
  
}
