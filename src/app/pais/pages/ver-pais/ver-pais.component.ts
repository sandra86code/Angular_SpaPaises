import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from '../../interfaces/searchResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  code: string="";
  country:any;
  
  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    
  }

  ngOnInit(): void {
      this.code = this.route.snapshot.params["id"];
      this.paisService.getCountryByCode(this.code)
      .subscribe({
        next: (resp) => {this.country=resp[0]},
        error: (error) =>  console.log(error)
       
      })
  }
}
