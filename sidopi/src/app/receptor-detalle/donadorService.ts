import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../persona';



@Injectable({
  providedIn: 'root'
})
export class donadorService {
  private apiUrl = "../../../assets/datos.json";
    constructor(private http: HttpClient) { }


  getDonantes(): Observable<Array<Persona>> {
    return this.http.get<Array<Persona>>(this.apiUrl);
  }

}

