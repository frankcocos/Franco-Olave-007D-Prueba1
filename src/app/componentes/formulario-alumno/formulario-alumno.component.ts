import { Component, Input,Output , EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { Historial } from 'src/app/modelo/historial';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{
  @Output()
  public enviarAlumno = new EventEmitter<Alumno>();

  @Input()
  public secciones: Array<Seccion> = [
  ]


  public alumno: Alumno = {
    rut: '',
    nombreAlumno: '',
    apellidoAlumno: '',
    edad: 0,
    seccion: {id:0,nombreSeccion:''}
  }

  public cambiarRut(evento: Event): void{
    const variable = evento.target as HTMLInputElement
    this.alumno.rut = variable.value
  }
  public cambiarNombre(evento: Event): void{
    const variable = evento.target as HTMLInputElement
    this.alumno.nombreAlumno = variable.value
  }
  public cambiarApellido(evento: Event): void{
    const variable = evento.target as HTMLInputElement
    this.alumno.apellidoAlumno = variable.value
  }
  public cambiarEdad(evento: Event): void{
    const variable = evento.target as HTMLInputElement
    this.alumno.edad = Number.parseInt(variable.value)
  }
  public cambiarSeccion(evento: Event): void{
    const variable = evento.target as HTMLSelectElement
    this.alumno.seccion.nombreSeccion = variable.value
  }


  public guardarAlumno():void{
    const copia: Alumno ={
      ...this.alumno
    }
    this.enviarAlumno.emit(copia);
    this.alumno.rut = '';
    this.alumno.nombreAlumno = '';
    this.alumno.apellidoAlumno = '';
    this.alumno.edad = 0;
    this.alumno.seccion = {id:0, nombreSeccion:''};

  }

}
