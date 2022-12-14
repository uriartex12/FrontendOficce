import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'Configuracion', loadChildren: () => import('./componentes/Configuracion/configuracion.module').then(m => m.ConfiguracionModule) },
  { path: 'reserva', loadChildren: () => import('./componentes/reserva/reserva.module').then(m => m.ReservaModule) },
  { path: 'recepcion', loadChildren: () => import('./componentes/recepcion/recepcion.module').then(m => m.RecepcionModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
