import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-direcciones',
  imports: [FormsModule],
  templateUrl: './crear-direcciones.html',
  styleUrl: './crear-direcciones.css'
})
export class CrearDirecciones {

  direccion = {
    address: '',
    district: '',
    city_id: 0,
    phone: ''
  };

  constructor(private http: HttpClient) {}

  crearDireccion() {

    this.http.post(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address',
      this.direccion,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json',
          Prefer: 'return=representation'
        }
      }
    ).subscribe({

      next: () => {

        alert('Dirección creada correctamente');

        this.direccion = {
          address: '',
          district: '',
          city_id: 0,
          phone: ''
        };

      },

      error: (error) => {

        console.log(error);

        alert('No se pudo crear la dirección');

      }

    });

  }

}