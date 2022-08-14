import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component'; 
import { VerReservaComponent } from './ver-reserva/ver-reserva.component';
import { CrearReservaComponent } from './crear-reserva/crear-reserva.component';

const routes: Routes = [

  { path: 'reserva', component: ListarReservaComponent },
  { path: 'editarReserva', component: EditarReservaComponent },
  { path: 'verReserva', component: VerReservaComponent },

];

@NgModule({
  declarations: [ListarReservaComponent, EditarReservaComponent, VerReservaComponent, CrearReservaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ReservaModule { }
