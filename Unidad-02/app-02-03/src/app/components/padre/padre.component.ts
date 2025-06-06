import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [CommonModule, HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  valor: number = 0;

  incrementar() {
    this.valor++;
  }

  decrementar() {
    this.valor--;
  }

  actualizarDesdeHijo(nuevoValor: number) {
    this.valor = nuevoValor;
  }
}

