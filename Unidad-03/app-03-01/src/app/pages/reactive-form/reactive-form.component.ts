// src/app/pages/reactive-form/reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  intereses = ['Arte', 'Cine', 'Ciencia'];
  clientes: any[] = [];
  editando = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarClientes();

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const cliente = this.service.getById(id);
      if (cliente) {
        this.editando = true;
        this.form.patchValue(cliente);
        this.interesesArray.clear();
        cliente.intereses.forEach((i: string) => this.interesesArray.push(this.fb.control(i)));
      }
    }
  }

  private inicializarFormulario(): void {
    this.form = this.fb.group({
      id: [0],
      nombre: ['', [Validators.required, Validators.minLength(30)]],
      correo: ['', [Validators.required, Validators.email], [this.emailExisteValidator()]],
      tipoDocumento: ['CC', Validators.required],
      documento: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(1)]],
      aceptaTerminos: [false, Validators.requiredTrue],
      intereses: this.fb.array([], Validators.required)
    });
  }

  private cargarClientes(): void {
    this.clientes = this.service.getAll();
  }

  get interesesArray(): FormArray {
    return this.form.get('intereses') as FormArray;
  }

  toggleInteres(interes: string, checked: boolean): void {
    const arr = this.interesesArray;
    const index = arr.controls.findIndex(c => c.value === interes);
    if (checked && index === -1) {
      arr.push(this.fb.control(interes));
    } else if (!checked && index !== -1) {
      arr.removeAt(index);
    }
    arr.markAsTouched(); // fuerza validación
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const cliente = this.form.value;
    this.editando ? this.service.update(cliente) : this.service.add(cliente);
    this.reiniciarFormulario();
    this.router.navigate(['/list']);
  }

  cancelar(): void {
    this.router.navigate(['/list']);
  }

  documentoValidator(control: AbstractControl): ValidationErrors | null {
    return /^(\d)\1+$/.test(control.value) ? { repetido: true } : null;
  }

  emailExisteValidator(): AsyncValidatorFn {
    return (control: AbstractControl) =>
      of(this.service.emailExists(control.value)).pipe(
        delay(500),
        map(existe => (existe ? { emailTomado: true } : null))
      );
  }

  onCheckboxChange(event: Event, interes: string): void {
    const input = event.target as HTMLInputElement;
    this.toggleInteres(interes, input.checked);
  }

  private reiniciarFormulario(): void {
    this.form.reset({ tipoDocumento: 'CC', aceptaTerminos: false, intereses: [] });
    this.interesesArray.clear();
    this.editando = false;
  }
}
