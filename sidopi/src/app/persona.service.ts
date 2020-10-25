import { Injectable } from '@angular/core';
import { Persona } from './Persona';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = "../assets/personas.json"

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Array<Persona>> {
    
    return this.http.get<Array<Persona>>(this.apiUrl);
  }

  getPersonaDetail(cedula): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${cedula}`);
  }



  createPersona(persona): Observable<Persona> {

    return this.http.post<Persona>(this.apiUrl + '/', persona);
  }
}
