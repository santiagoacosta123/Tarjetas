import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ciudad',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-ciudad.html',
  styleUrl: './formulario-ciudad.css',
})
export class FormularioCiudad {

  nuevaCiudad={
    city: '',
    country_id: 0
  }

constructor(private http: HttpClient) {}

guardarCiudad() {

  this.http.post(
    'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/city',

    this.nuevaCiudad,

    {
        headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
    }

    ).subscribe({
    next: (respuesta) => {
      alert("Ciudad guardada correctamente");
      console.log(respuesta);

      this.nuevaCiudad = {
        city: '',
        country_id: 0
      };
    },
    
  });

}
}