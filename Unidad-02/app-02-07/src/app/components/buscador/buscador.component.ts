import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule,HeroeTarjetaComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

}

