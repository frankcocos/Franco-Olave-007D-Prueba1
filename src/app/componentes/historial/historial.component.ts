import { Component, Input } from '@angular/core';
import { Historial } from 'src/app/modelo/historial';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  @Input() public Historial! : Historial

}
