import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Habitacion } from '../Modelo/Habitacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8000/api';

  listarHabitacion(){
    return this.http.get<Habitacion[]>(this.Url+'/hotel/ListarHabitacion');
  }

}
