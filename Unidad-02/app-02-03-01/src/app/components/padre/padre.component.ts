import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [CommonModule, HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
   valorSignal = signal(0);

  incrementar() {
    this.valorSignal.update(v => v + 1);
  }

  decrementar() {
    this.valorSignal.update(v => v - 1);
  }

  actualizarDesdeHijo(valor: number) {
    this.valorSignal.set(valor);
  }

  actualizarDesdeNieto(valor: number) {
    this.valorSignal.set(valor);
  }
}

