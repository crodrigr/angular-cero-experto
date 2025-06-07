export interface Client {
  id: number;
  nombre: string;
  correo: string;
  tipoDocumento: 'CC' | 'TI' | 'CE';
  documento: string;
  edad: number;
  aceptaTerminos: boolean;
  intereses: string[];
}
