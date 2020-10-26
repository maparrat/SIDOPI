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
  receptor: Persona;
  receptor_id: number;
  personas: Persona[];
  donantes:Persona[];
  compatibles:Persona[];
  constructor(private personaService:PersonaService, private route: ActivatedRoute ,private servicio:donadorService) { }

  //funciona receptores 
  getDetail(): void {
  
    this.personaService.getPersonas()
    
      .subscribe(donantes => {
        this.personas = donantes
        console.log(this.receptor_id)
        this.personas.forEach(per => {

          per.cedula == this.receptor_id.toString() ? this.receptor = per : 0
          this.personas.push(per);

      });
        this.getCompatibles();
        
    });
    
  }


  // xd aca donante 
  getCompatibles(): void{

    this.personas.forEach(per => { 
      let flag = true;
      per.donante === true ? flag = false : 0;
      per.tipoSangre != this.receptor.tipoSangre ? flag = false : 0;
      per.phPiel != this.receptor.phPiel ? flag = false : 0;
      per.cantidadVello - this.receptor.cantidadVello > 10 ? flag = false : 0;
      per.colorPiel != this.receptor.colorPiel ? flag = false : 0;
      per.cedula === this.receptor.cedula ? flag = false : 0;
      flag === true ? this.compatibles.push(per) : 0;
    })
  }

 
  ngOnInit(): void {
    this.personas = [];
    this.compatibles = [];
    this.receptor_id = +this.route.snapshot.paramMap.get('id');
    this.receptor = new Persona();
    
    this.getDetail();
    //this.getJson();
    //this.getCompatibles();
    

  }
  
 

}
