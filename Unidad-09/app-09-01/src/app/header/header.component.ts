import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { AuthService } from '../usuario/auth.service';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ obligatorio en apps standalone
  imports: [CommonModule], // ✅ necesario para usar *ngIf, etc.
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Invoice';

  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    Swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }
}
