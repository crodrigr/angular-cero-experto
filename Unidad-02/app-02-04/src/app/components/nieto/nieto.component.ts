import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nieto',
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('[Nieto] Constructor');
  }

  ngOnInit(): void {
    console.log('[Nieto] ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('[Nieto] ngOnDestroy');
  }
}
