import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Client } from '../../models/client.model';
import { ClienteService } from '../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {
  cliente: Client = this.resetForm();
  intereses = ['Deporte', 'Arte', 'Tecnología'];
  editando = false;

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existente = this.service.getById(id);
      if (existente) {
        this.cliente = { ...existente };
        this.editando = true;
      }
    }
  }

  resetForm(): Client {
    return {
      id: 0,
      nombre: '',
      correo: '',
      tipoDocumento: 'CC',
      documento: '',
      edad: 0,
      aceptaTerminos: false,
      intereses: []
    };
  }

  onSubmit(form: NgForm): void {
    if (this.editando) {
      this.service.update(this.cliente);
    } else {
      this.service.add(this.cliente);
    }

    this.cliente = this.resetForm();
    form.resetForm(this.cliente);
    this.editando = false;
    this.router.navigate(['/list']);
  }

  onCheckboxChange(event: Event, interes: string): void {
    const input = event.target as HTMLInputElement;
    this.toggleInteres(interes, input.checked);
  }

  toggleInteres(interes: string, checked: boolean): void {
    const index = this.cliente.intereses.indexOf(interes);
    if (checked && index === -1) {
      this.cliente.intereses.push(interes);
    } else if (!checked && index !== -1) {
      this.cliente.intereses.splice(index, 1);
    }
  }

  validarIntereses(): boolean {
    return this.cliente.intereses.length > 0;
  }

  cancelar(): void {
    this.router.navigate(['/list']);
  }
}
