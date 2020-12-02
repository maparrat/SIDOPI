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
  compatibles: Persona[];
  
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

   getCompatiblesSangre(tipoSangre) {
    let ans = []
    tipoSangre === "A+"  ? ans = ["O+", "O-", "A+", "A-"] :
    tipoSangre === "A-"  ? ans = ["O-", "A-"] :
    tipoSangre === "B+"  ? ans = ["O+", "O-", "B+", "B-"] :
    tipoSangre === "B-"  ? ans = ["O-", "B-"]:
    tipoSangre === "AB+" ? ans = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]:
    tipoSangre === "AB-" ? ans = ["A-", "B-", "AB-", "O-"] :
    tipoSangre === "O+" ? ans = ["O+", "O-"] :
    tipoSangre === "O-" ? ans = ["O-"] : 
    ans = []
    return ans
  }


 

  // xd aca donante 
  getCompatibles(): void{

    this.personas.forEach(per => {
      let flag = true;
      var sangre=this.getCompatiblesSangre(this.receptor.tipoSangre)
      sangre.includes(per.tipoSangre)? flag=true: flag=false
      
      per.donante === true ? flag = false : 0;
      
     
      var porcentajeColorPiel = Math.abs(100- 100*(Math.abs(per.colorPiel - this.receptor.colorPiel) /5))
      
      var porcentajePhPiel= Math.abs(100-100*(Math.abs(per.phPiel-this.receptor.phPiel)/1.25))

      var porcentajeVello = Math.abs(100-100*(Math.abs(per.cantidadVello - this.receptor.cantidadVello) / 10))
      
      
     
      
      
      per.cedula === this.receptor.cedula ? flag = false : 0;
      per["compColor"] =porcentajeColorPiel.toFixed(2)
      per["compPhPiel"] = porcentajePhPiel.toFixed(2)
      per["compVello"] = porcentajeVello.toFixed(2)
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
