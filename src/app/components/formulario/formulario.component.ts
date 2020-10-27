import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(parametro){

    if(parametro.status === "INVALID"){
      return;
    }

    console.log(parametro.form.value)
  }

}
