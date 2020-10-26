import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonanteDetalleComponent } from './donante-detalle/donante-detalle.component';
import { DonanteComponent } from './donante/donante.component';
import { FormularioDonanteComponent } from './formulario-donante/formulario-donante.component';
import { FormularioReceptorComponent } from './formulario-receptor/formulario-receptor.component';
import { LandingComponent } from './landing/landing.component';
import { ReceptorDetalleComponent } from './receptor-detalle/receptor-detalle.component';
import { ReceptorComponent } from './receptor/receptor.component';

const routes: Routes = [
  { path: 'fr', component: FormularioReceptorComponent,  pathMatch: 'full'}, 
  { path: 'fd', component: FormularioDonanteComponent, pathMatch: 'full' },
  { path: 'dd/:id', component: DonanteDetalleComponent, pathMatch:'full' },
  { path: 'dr/:id', component: ReceptorDetalleComponent, pathMatch:'full' },
  { path: 'lr', component: ReceptorComponent, pathMatch:'full' },
  { path: 'd', component: DonanteComponent, pathMatch: 'full' },
  { path: "", component: LandingComponent, pathMatch: 'full' },
  {path:"#", component:LandingComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
