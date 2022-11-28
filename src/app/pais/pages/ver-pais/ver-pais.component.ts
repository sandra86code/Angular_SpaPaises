import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  country! : { Name: string };
  

  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    
  }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params: Params) => {
          this.country.Name = params['Name'];
    })
  }

  searchCountries() {
    console.log(this.country.Name)
    this.paisService.searchCountries(this.country.Name);
  }

  get results(): Country[] {
    return this.paisService.results;
  }


}
