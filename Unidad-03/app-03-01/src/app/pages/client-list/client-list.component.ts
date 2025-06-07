// src/app/pages/client-list/client-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Client } from '../../models/client.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clientes: Client[] = [];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  delete(id: number): void {
    this.service.delete(id);
    this.cargarClientes();
  }

  private cargarClientes(): void {
    this.clientes = this.service.getAll();
  }
}
