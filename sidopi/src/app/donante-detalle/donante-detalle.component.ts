import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { PersonaService } from "../persona.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-donante-detalle',
  templateUrl: './donante-detalle.component.html',
  styleUrls: ['./donante-detalle.component.css']
})
export class DonanteDetalleComponent implements OnInit {
  donante: Persona;
  donante_id: number;
  personas: Persona[];
  constructor(private personaService:PersonaService, private route: ActivatedRoute ) { }

  getDetail(): void {
  
    this.personaService.getPersonas()
    
      .subscribe(donantes => {
        this.personas = donantes
        console.log(this.donante_id)
        this.personas.forEach(per => {

          per.cedula == this.donante_id.toString() ? this.donante=per : 0
      });
     
    });
    
  }

  ngOnInit(): void {
    this.personas = [];
    this.donante_id = +this.route.snapshot.paramMap.get('id');
    this.donante = new Persona();
    
    this.getDetail();
  }

 

}
