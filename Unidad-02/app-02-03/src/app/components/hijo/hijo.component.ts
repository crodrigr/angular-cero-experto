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

  multiplicar() {
    this.valor *= 2;
    this.valorCambiado.emit(this.valor);
  }

  dividir() {
    this.valor = Math.floor(this.valor / 2);
    this.valorCambiado.emit(this.valor);
  }

  actualizarDesdeNieto(nuevoValor: number) {
    this.valor = nuevoValor;
    this.valorCambiado.emit(this.valor);
  }
}
