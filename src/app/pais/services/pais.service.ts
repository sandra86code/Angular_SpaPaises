import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/searchResponse';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _url: string = "https://restcountries.com/v3.1/";


  private _query: string = "";



  constructor(private http: HttpClient) { }

  

  searchCountries (query: string) : Observable<Country[]> {
    this._query = query;
    return this.http.get<Country[]>(this._url + "name/" +this._query);
  }
  
  getCountryByCode(code: string) : Observable<Country[]>{
    return this.http.get<Country[]>(this._url + "alpha/" + code)
  }
}


