import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroe-tarjeta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  @Output() heroeSeleccionado: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  verHeroe() {
    this.heroeSeleccionado.emit(this.index);
    this.router.navigate(['/heroe', this.index]); // ✅ opcional: navegación directa
  }
}
