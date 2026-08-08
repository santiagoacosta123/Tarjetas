import { Component } from '@angular/core';

import { ListarDirecciones } from './listar-direcciones/listar-direcciones';
import { CrearDirecciones } from './crear-direcciones/crear-direcciones';
import { ActualizarDirecciones } from './actualizar-direcciones/actualizar-direcciones';

@Component({
  selector: 'app-direcciones',
  imports: [
    ListarDirecciones,
    CrearDirecciones,
    ActualizarDirecciones
  ],
  templateUrl: './direcciones.html',
  styleUrl: './direcciones.css'
})
export class Direcciones {

  vista = 'listar';

  mostrarListar() {
    this.vista = 'listar';
  }

  mostrarCrear() {
    this.vista = 'crear';
  }

  mostrarActualizar() {
    this.vista = 'actualizar';
  }

}