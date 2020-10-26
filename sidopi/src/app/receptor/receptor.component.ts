import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { PersonaService } from "../persona.service";
@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit {
  receptores: Persona[];

  constructor(private personaService:PersonaService ) { }

  ngOnInit(): void {
    this.receptores=[]
    this.getPersonas();
  }

  getPersonas(): void{
   
    this.personaService.getPersonas().subscribe(per => {
      console.log(this.receptores)
      per.forEach(persona=>true== true ? this.receptores.push(persona): 0 )
     })
   
  
  }

}
