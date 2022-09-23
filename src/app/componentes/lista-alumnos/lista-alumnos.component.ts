import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  @Input() public alumnos : Array<Alumno> =[]

}
