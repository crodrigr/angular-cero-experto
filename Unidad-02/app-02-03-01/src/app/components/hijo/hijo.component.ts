import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from '../nieto/nieto.component';

@Component({
  selector: 'app-hijo',
  imports: [CommonModule, NietoComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() valor: number = 0;
  @Output() valorCambiado = new EventEmitter<number>();
  @Output() valorReset = new EventEmitter<number>();

  multiplicar() {
    this.valorCambiado.emit(this.valor * 2);
  }

  dividir() {
    this.valorCambiado.emit(Math.floor(this.valor / 2));
  }

  actualizarDesdeNieto(valor: number) {
    this.valorReset.emit(valor);
  }
}
