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
  templateUrl: './direcciones.html'
})
export class Direcciones {

  seccion = '';

  mostrar(seccion: string) {
    this.seccion = seccion;
  }

}