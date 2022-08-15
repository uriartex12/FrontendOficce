import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from '../../../Modelo/Habitacion';
import {ServiceService}from '../../../Service/service.service'

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss']
})
export class HabitacionComponent implements OnInit {

  habitaciones:Habitacion[];
  constructor(private service:ServiceService, private route:Router) { }

  ngOnInit(): void {
    this.service.listarHabitacion().subscribe((data: any) =>{
      this.habitaciones=data.List;
    }
    )
  }
}
