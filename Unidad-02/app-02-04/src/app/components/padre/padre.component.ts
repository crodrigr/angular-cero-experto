import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [CommonModule,HijoComponent],
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit, OnDestroy {
  mostrarHijo = true;

  constructor() {
    console.log('[Padre] Constructor');
  }

  ngOnInit(): void {
    console.log('[Padre] ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('[Padre] ngOnDestroy');
  }

  toggleHijo() {
    this.mostrarHijo = !this.mostrarHijo;
  }
}
