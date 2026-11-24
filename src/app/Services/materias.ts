import { Injectable } from '@angular/core'; //Trae la herramienta para marcar la clase como servicio.
import { HttpClient } from '@angular/common/http';//Trae el mensajero que hace peticiones por internet.
import { Observable } from 'rxjs';//Trae el tipo de dato de una respuesta que llega después.

@Injectable({
  providedIn: 'root',
})
export class MateriasService {   // cre la clase 

  private readonly url = 'http://localhost:3000/api/v1/materias'; // direccion del backent

  constructor(private http: HttpClient) {} //Angular le entrega el HttpClient.

  // Obtener todas las materias
  getMaterias(): Observable<any[]> {   //optine materias y devuelve un observable de tipo any[]
    return this.http.get<any[]>(this.url);
  }
} 