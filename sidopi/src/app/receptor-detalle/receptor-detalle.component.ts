import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { PersonaService } from "../persona.service";
import { ActivatedRoute } from '@angular/router';
import { donadorService } from './donadorService';
@Component({
  selector: 'app-receptor-detalle',
  templateUrl: './receptor-detalle.component.html',
  styleUrls: ['./receptor-detalle.component.css']
})
export class ReceptorDetalleComponent implements OnInit {
  donante: Persona;
  donante_id: number;
  personas: Persona[];
  donnates:Persona[];
  compatibles:Persona[];
  constructor(private personaService:PersonaService, private route: ActivatedRoute ,private servicio:donadorService) { }

  //funciona receptores 
  getDetail(): void {
  
    this.personaService.getPersonas()
    
      .subscribe(donantes => {
        this.personas = donantes
        console.log(this.donante_id)
        this.personas.forEach(per => {

          persona=>true== true ? this.personas.push(persona): 0
      });
     
    });
    
  }
  //no funciona donantes
  getJson(): void {
    this.servicio.getDonantes()
    
    .subscribe(donantes => {
      this.donnates = donantes
      console.log(this.donante_id+"pru")
      this.donnates.forEach(per => {

        persona=>true== true ? this.donnates.push(persona): 0
    });
   
  });
}

  // xd aca donante 
  getCompatibles(): void{
    for (let index = 1; index < 5; index++) {
        const element = this.personas[index];
        
  
        this.compatibles.push(element);
          
        

      
    }
  }

 
  ngOnInit(): void {
    this.personas = [];
    this.compatibles = [];
    this.donante_id = +this.route.snapshot.paramMap.get('id');
    this.donante = new Persona();
    
    this.getDetail();
    //this.getJson();
    this.getCompatibles();
    

  }
  
 

}
