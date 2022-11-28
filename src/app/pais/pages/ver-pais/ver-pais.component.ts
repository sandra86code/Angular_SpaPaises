import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  

  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    this.paisService.searchCountries(this.route.snapshot.params['id'])
  }

  ngOnInit(): void {
  }

  

  get results(): Country[] {
    return this.paisService.results;
  }


}
