import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent },
  {path: '**', redirectTo: 'formulario'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
