import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListarRecepcionComponent } from './listar-recepcion/listar-recepcion.component';
import { EditarRecepcionComponent } from './editar-recepcion/editar-recepcion.component';
import { VerRecepcionComponent } from './ver-recepcion/ver-recepcion.component';



const routes: Routes = [

  { path: 'recepcion', component: ListarRecepcionComponent },
  { path: 'editarRecepcion', component: EditarRecepcionComponent },
  { path: 'verRecepcion', component: VerRecepcionComponent },

];

@NgModule({
  declarations: [VerRecepcionComponent, ListarRecepcionComponent, VerRecepcionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RecepcionModule { }
