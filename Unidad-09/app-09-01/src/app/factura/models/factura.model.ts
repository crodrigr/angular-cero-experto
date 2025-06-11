import { ItemFactura } from "./item-factura.model";
import { Cliente } from "../../cliente/cliente.model";

export class Factura {
  id: number = 0;
  descripcion: string = '';
  observacion: string = '';
  items: ItemFactura[] = [];
  cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    email: ''
  };
  total: number = 0;
  createAt: string = new Date().toISOString();

  calcularGranTotal(): number {
    this.total = 0;
    this.items.forEach(item => {
      this.total += item.calcularImporte();
    });
    return this.total;
  }
}
