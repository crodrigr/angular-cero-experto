import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nieto',
  imports: [CommonModule],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent {
  @Input() valor: number = 0;
  @Output() valorReset = new EventEmitter<number>();

  resetear() {
    this.valorReset.emit(0);
  }
}
