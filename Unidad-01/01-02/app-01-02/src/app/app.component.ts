import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent} from './saludo/saludo.component';

@Component({
  selector: 'app-root',
  imports: [SaludoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-01-02';
}
