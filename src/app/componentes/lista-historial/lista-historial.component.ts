import { Component, Input } from '@angular/core';
import { Historial } from 'src/app/modelo/historial';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input() public historiales : Array<Historial> = []
}
