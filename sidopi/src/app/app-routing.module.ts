import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDonanteComponent } from './formulario-donante/formulario-donante.component';
import { FormularioReceptorComponent } from './formulario-receptor/formulario-receptor.component';

const routes: Routes = [
  { path: 'fr', component: FormularioReceptorComponent,  pathMatch: 'full'}, 
  { path: 'fd', component: FormularioDonanteComponent,  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
