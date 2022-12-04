import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  countries: Country[]=[];
  errors: boolean = false;
  textError: string = "";

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  searchCountries (query: string) {
    this.textError = query;
    this.paisService.searchCountriesByCapital(query)
    .subscribe({
      next: (resp) => {
        this.countries = resp
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
