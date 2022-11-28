import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/searchResponse';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _url: string = "https://restcountries.com/v3.1/name/";
  
  private _results: Country[] = [];

  private _query: string = "";

  private _errors: boolean = false;

  constructor(private http: HttpClient) { }

  get results(): Country[] {
    return [...this._results];
  }

  get errors(): boolean {
    return this._errors;
  }

  searchCountries (query: string) {
    this._query = query;
    this.http.get<Country[]>(this._url + this._query)
    .subscribe({
      next: (resp) =>{
        this._results = resp;
        this._errors = false;
    },
      error: (err) =>{
        this._errors = true;
        this._results = []
      }
    })
  }
 
}


