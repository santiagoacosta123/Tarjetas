import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Direccion {
  address_id: number;
  address: string;
  district: string;
  city_id: number;
  phone: string;
}

@Component({
  selector: 'app-listar-direcciones',
  imports: [],
  templateUrl: './listar-direcciones.html',
  styleUrl: './listar-direcciones.css'
})
export class ListarDirecciones {

  direcciones: Direccion[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.traerDirecciones();
  }

  traerDirecciones() {

    this.http.get<Direccion[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address?select=address_id,address,district,city_id,phone&order=address_id.desc',
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
        }
      }
    ).subscribe({

      next: (respuesta) => {
        this.direcciones = respuesta;
      },

      error: (error) => {
        console.log(error);
        alert('No se pudieron cargar las direcciones');
      }

    });

  }


  eliminarDireccion(id: number) {

    const confirmar = confirm(
      '¿Está seguro de eliminar esta dirección?'
    );

    if (!confirmar) {
      return;
    }

    this.http.delete(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address?address_id=eq.${id}`,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
        }
      }
    ).subscribe({

      next: () => {

        alert('Dirección eliminada correctamente');

        this.traerDirecciones();

      },

      error: (error) => {

        console.log(error);

        alert('No se pudo eliminar la dirección');

      }

    });

  }

}