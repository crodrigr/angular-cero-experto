import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component'; // Asegúrate de importar el componente hijo

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroeTarjetaComponent], // ← Importamos lo necesario para routerLink y el componente hijo
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] // ← corregido: era styleUrl, debe ser styleUrls
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    console.log("verIndex::"+idx);
    this.router.navigate(['/heroe', idx]);
  }
}
