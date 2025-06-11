import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Por favor Sign In!';
  usuario: Usuario;

  constructor(private authService: AuthService,
    private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

 login(): void {
  if (this.usuario.username == null || this.usuario.password == null) {
    swal.fire('Error Login', 'Username o password vacías!', 'error');
    return;
  }

  this.authService.login(this.usuario).subscribe({
    next: (response) => {
      console.log('✅ Respuesta del backend:', response); // Imprimir respuesta

      const token = response.access_token;
      this.authService.guardarToken(token);
      this.authService.guardarUsuario(token);

      const usuario = this.authService.usuario;
      this.router.navigate(['/clientes']);
      swal.fire('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
    },
    error: (error) => {
      console.error('❌ Error en login:', error); // Imprimir error
      swal.fire('Error Login', 'Credenciales incorrectas o servidor no disponible', 'error');
    }
  });
}



}
