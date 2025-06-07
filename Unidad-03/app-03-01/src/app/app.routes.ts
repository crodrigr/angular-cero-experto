import { Routes } from '@angular/router';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ClientListComponent },
    { path: 'form-template', component: TemplateFormComponent },
    { path: 'form-template/:id', component: TemplateFormComponent },
    { path: 'form-reactive', component: ReactiveFormComponent },
    { path: 'form-reactive/:id', component: ReactiveFormComponent },
];
