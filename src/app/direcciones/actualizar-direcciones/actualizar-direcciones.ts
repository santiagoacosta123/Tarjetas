import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-direcciones',
  imports: [FormsModule],
  templateUrl: './actualizar-direcciones.html',
  styleUrl: './actualizar-direcciones.css'
})
export class ActualizarDirecciones {

  direccion = {
    address_id: 0,
    address: '',
    district: '',
    city_id: 0,
    phone: ''
  };

  constructor(private http: HttpClient) {}

  actualizarDireccion() {

    this.http.patch(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address?address_id=eq.${this.direccion.address_id}`,
      {
        address: this.direccion.address,
        district: this.direccion.district,
        city_id: this.direccion.city_id,
        phone: this.direccion.phone
      },
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({

      next: () => {

        alert('Dirección actualizada correctamente');

      },

      error: (error) => {

        console.log(error);

        alert('No se pudo actualizar la dirección');

      }

    });

  }

}