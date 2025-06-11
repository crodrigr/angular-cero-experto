import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title = 'Cliente';
  clientes: Cliente[] = [];

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
    if (cliente.id != undefined) {
      this.clienteService.delete(cliente.id).subscribe({
        next: () => {
          this.clientes = this.clientes.filter(cli => cli !== cliente)
        }
      })
    }
  }

}
