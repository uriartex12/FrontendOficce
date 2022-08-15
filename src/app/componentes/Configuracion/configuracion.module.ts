import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { PisosComponent } from './pisos/pisos.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

const routes: Routes = [

  { path: 'categoria', component: CategoriaComponent },
  { path: 'habitacion', component: HabitacionComponent },
  { path: 'pisos', component: PisosComponent },

];


@NgModule({
  declarations: [CategoriaComponent,PisosComponent, HabitacionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ConfiguracionModule { }
