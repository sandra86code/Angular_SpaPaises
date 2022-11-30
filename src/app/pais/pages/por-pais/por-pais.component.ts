import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  query: string = "";
  countries: Country[]=[];
  errors: boolean = false;

  constructor(private paisService: PaisService) { 
    
  }

  ngOnInit(): void {

  }

  searchCountries () {
    this.paisService.searchCountries(this.query)
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
    this.query = "";
  }
  
}
