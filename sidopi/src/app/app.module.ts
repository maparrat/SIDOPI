import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonanteComponent } from './donante/donante.component';
import { ReceptorComponent } from './receptor/receptor.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { FormularioReceptorComponent } from './formulario-receptor/formulario-receptor.component';
import { FormularioDonanteComponent } from './formulario-donante/formulario-donante.component';
import { DonanteDetalleComponent } from './donante-detalle/donante-detalle.component';
import { ReceptorDetalleComponent } from './receptor-detalle/receptor-detalle.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DonanteComponent,
    ReceptorComponent,
    FormularioReceptorComponent,
    FormularioDonanteComponent,
    DonanteDetalleComponent,
    ReceptorDetalleComponent,
    LandingComponent,
    RouterModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
