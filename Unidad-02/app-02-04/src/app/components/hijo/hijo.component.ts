import {
  Component, OnInit, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { NietoComponent } from '../nieto/nieto.component';

@Component({
  selector: 'app-hijo',
  imports: [NietoComponent],
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('[Hijo] Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Hijo] ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('[Hijo] ngOnInit');
  }

  ngDoCheck(): void {
    console.log('[Hijo] ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('[Hijo] ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('[Hijo] ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('[Hijo] ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('[Hijo] ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('[Hijo] ngOnDestroy');
  }
}
