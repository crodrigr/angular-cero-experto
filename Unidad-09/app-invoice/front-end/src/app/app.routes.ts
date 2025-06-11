import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormComponent } from './cliente/form/form.component';
import { FacturasComponent } from './factura/factura.component';
import { AuthGuard } from './usuario/auth.guard';
import { LoginComponent } from './usuario/login.component';

export const routes: Routes = [
  { path: 'clientes', component: ClienteComponent, canActivate: [AuthGuard] },
  { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'facturas/form/:clienteId', component: FacturasComponent, canActivate: [AuthGuard] },
  { path: 'facturas/:id', component: FacturasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];