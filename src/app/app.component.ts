import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno';
import { Historial } from './modelo/historial';
import { Seccion } from './modelo/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public listaAlumnos: Array<Alumno> = [
  ]
  public listaHistorial: Array<Historial> = [

  ]
  public listaSeccion: Array<Seccion> = [
    {
      id:1,
      nombreSeccion:''
    }

  ]

  public guardarSeccion(nuevo: Seccion): void{
    this.listaSeccion.push(nuevo);
  }
  public guardarAlumno(nuevo: Alumno): void{
    this.listaHistorial.push({fecha: new Date, alumno: nuevo})
    this.listaAlumnos.push(nuevo);
    console.log(this.listaHistorial)

  }

}
