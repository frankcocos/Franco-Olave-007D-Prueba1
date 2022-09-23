import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public enviar = new EventEmitter<Seccion>();
  public seccion: Seccion = {
    id: 1,
    nombreSeccion: ''
  }

  public cambiarNombreSeccion(evento: Event): void{
    const variable = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = variable.value;
  }
  public guardarSeccion():void{
    const copia: Seccion ={
      ...this.seccion
    }
    this.enviar.emit(copia);
    this.seccion.id = this.seccion.id + 1;
    this.seccion.nombreSeccion = '';
  }
}
