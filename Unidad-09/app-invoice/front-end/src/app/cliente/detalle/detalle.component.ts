import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';
import swal from 'sweetalert2';
import { Factura } from '../../factura/models/factura.model';
import { FacturaService } from '../../factura/services/factura.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'detalle-cliente',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() cliente!: Cliente;

  titulo: string = "Detalle del cliente";

  constructor(
    private clienteService: ClienteService,
    public modalService: ModalService,
    private facturaService: FacturaService
  ) {}

  ngOnInit(): void {
      this.cliente.facturas = this.cliente.facturas ?? [];
  }

  cerrarModal(): void {
    this.modalService.cerrarModal();
  }

  delete(factura: Factura): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la factura: ${factura.descripcion}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facturaService.delete(factura.id).subscribe(() => {
          this.cliente.facturas = this.cliente.facturas?.filter(f => f !== factura) ?? [];
          swal.fire(
            'Factura Eliminada!',
            `Factura ${factura.descripcion} eliminada con éxito.`,
            'success'
          );
        });
      }
    });
  }
}
