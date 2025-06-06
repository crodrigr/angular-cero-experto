import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [CommonModule,CapitalizadoPipe, ContrasenaPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-02-02';
   // Variables para ejemplos de pipes
  nombre: string = 'Capitán América';
  nombre2: string = 'ferNanDo hErrerA jImeneZ';
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  promesa = new Promise((resolve) => {
    setTimeout(() => resolve('Datos cargados'), 3000);
  });
  texto: string = 'hola mundo';
  password: string = '123456';
}
