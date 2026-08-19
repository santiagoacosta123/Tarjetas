import { Routes } from '@angular/router';
import { FormularioCiudad } from './ciudad/formulario-ciudad/formulario-ciudad';
import { ListarCiudad } from './ciudad/listar-ciudad/listar-ciudad';
import { ActualizarCiudad } from './ciudad/actualizar-ciudad/actualizar-ciudad';

import { Clientes } from './clientes/clientes';
import { CrearClientes } from './clientes/crear-clientes/crear-clientes';
import { ListarClientes } from './clientes/listar-clientes/listar-clientes';
import { ActualizarClientes } from './clientes/actualizar-clientes/actualizar-clientes';

import { Direcciones } from './direcciones/direcciones';
import { CrearDirecciones } from './direcciones/crear-direcciones/crear-direcciones';
import { ListarDirecciones } from './direcciones/listar-direcciones/listar-direcciones';
import { ActualizarDirecciones } from './direcciones/actualizar-direcciones/actualizar-direcciones';


import { FormularioPaises } from './paises/formulario-paises/formulario-paises';
import { ListarPaises } from './paises/listar-paises/listar-paises';
import { ActualizarPaises } from './paises/actualizar-paises/actualizar-paises';

export const routes: Routes = [

  {
    path: '',
    component: FormularioPaises
  },

  {
    path: 'listar-paises',
    component: ListarPaises
  },
  {
    path: 'actualizar-paises/:id',
    component: ActualizarPaises
  },

  {
    path: 'formulario-ciudad',
    component: FormularioCiudad
  },
  {
    path: 'listar-ciudad',
    component: ListarCiudad
  },
  {
    path: 'actualizar-ciudad/:id',
    component: ActualizarCiudad
  },
  
  {
    path: 'clientes',
    component: Clientes
  },
  {
    path: 'crear-clientes',
    component: CrearClientes
  },
  {
    path: 'listar-clientes',
    component: ListarClientes
  },
  {
    path: 'actualizar-clientes/:id',
    component: ActualizarClientes
  },

  {
    path: 'direcciones',
    component: Direcciones
  },
  {
    path: 'crear-direcciones',
    component: CrearDirecciones
  },
  {
    path: 'listar-direcciones',
    component: ListarDirecciones
  },
  {
    path: 'actualizar-direcciones/:id',
    component: ActualizarDirecciones
  }

];
