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
  donante_id:number;
  constructor(private personaService:PersonaService, private route: ActivatedRoute ) { }

  getDetail(): void {
    this.personaService.getPersonaDetail(this.donante_id)
    .subscribe(donante => {
        this.donante = donante
    });
  
  }

  ngOnInit(): void {
    this.donante_id = +this.route.snapshot.paramMap.get('id');
  
    
    this.getDetail();
  }

 

}
