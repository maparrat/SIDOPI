import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { PersonaService } from "../persona.service";
@Component({
  selector: 'app-donante',
  templateUrl: './donante.component.html',
  styleUrls: ['./donante.component.css']
})
export class DonanteComponent implements OnInit {
  donantes: Persona[];

  constructor(private personaService:PersonaService ) { }

  ngOnInit(): void {
    this.donantes=[]
    this.getPersonas();
  }

  getPersonas(): void{
   
    this.personaService.getPersonas().subscribe(per => {
      console.log(this.donantes)
      per.forEach(persona=>persona.donante == true ? this.donantes.push(persona): 0 )
     })
   
  
  }

}
