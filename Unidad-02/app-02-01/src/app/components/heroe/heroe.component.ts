import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']  // ← corregido: era `styleUrl`, debe ser `styleUrls`
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }
}
