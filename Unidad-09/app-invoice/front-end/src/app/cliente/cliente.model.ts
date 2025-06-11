import { Region } from "./region.model";
import { Factura } from "../factura/models/factura.model";

export interface Cliente {
  id?: number;
  nombre?: string;
  apellido?: string;
  createAt?: string;
  email?: string;
  region?: Region;
  facturas?: Factura[];
}
