import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clients: Client[] = [];

  constructor() {
    const data = localStorage.getItem('clientes');
    this.clients = data ? JSON.parse(data) : [];
  }

  getAll(): Client[] {
    return [...this.clients];
  }

  add(client: Client): void {
    client.id = Date.now();
    this.clients.push(client);
    this.save();
  }

  update(updated: Client): void {
    const index = this.clients.findIndex(c => c.id === updated.id);
    if (index !== -1) {
      this.clients[index] = updated;
      this.save();
    }
  }

  delete(id: number): void {
    this.clients = this.clients.filter(c => c.id !== id);
    this.save();
  }

  emailExists(email: string): boolean {
    return this.clients.some(c => c.correo === email);
  }

  private save(): void {
    localStorage.setItem('clientes', JSON.stringify(this.clients));
  }

  getById(id: number): Client | undefined {
    return this.clients.find(c => c.id === id);
  }


}