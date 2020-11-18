import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { PersonaService } from "../persona.service";
import { ActivatedRoute } from '@angular/router';
import { receptorTriageService } from './receptorTriageService';

@Component({
  selector: 'app-receptor-triage',
  templateUrl: './receptor-triage.component.html',
  styleUrls: ['./receptor-triage.component.css']
})
export class ReceptorTriageComponent implements OnInit {

  receptor: Persona;
  receptor_id: number;
  personas: Persona[];
  compatibles:Persona[];
  receptores:Persona[];
  constructor(private personaService:PersonaService, private route: ActivatedRoute ,private servicio:receptorTriageService) { }


  //funciona receptores 
  getDetail(): void {
  
    this.personaService.getPersonas()
    
      .subscribe(receptores => {
        this.personas = receptores
        this.getReceptores();
        this.getTriage();
        
    });
    
  }

    getTriage(): void{
      //this.receptores.sort((a, b) => parseFloat(a.phPiel) - parseFloat(b.phPiel));
      this.receptores.sort((a, b) => a.phPiel - b.phPiel);
    }

    // xd aca donante 
    getReceptores(): void{

      this.personas.forEach(per => { 
        let flag = true;
        flag === true ? this.receptores.push(per) : 0;
      })
    }

    ngOnInit(): void {
      this.personas = [];
      this.receptores = [];
      
      this.getDetail();
      //this.getJson();
      //this.getCompatibles();
      
  
    }

}
