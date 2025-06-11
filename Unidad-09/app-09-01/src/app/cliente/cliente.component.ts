import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import swal from 'sweetalert2';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, RouterModule,DetalleComponent],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title = 'Cliente';
  clientes: Cliente[] = [];
  clienteSeleccionado: Cliente | null = null;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    });
  }

  delete(cliente: Cliente): void {
    if (cliente.id == null) {
      console.error('Cliente ID es undefined o null');
      return;
    }

    swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id!).subscribe({
          next: () => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swal.fire(
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito.`,
              'success'
            );
          }
        });
      }
    });
  }

  abrirModal(cliente: Cliente): void {
  // lógica para abrir el modal
  console.log('Abrir modal para:', cliente);
}



}
