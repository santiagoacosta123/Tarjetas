import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-paises',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './formulario-paises.html',
  styleUrl: './formulario-paises.css'
})
export class FormularioPaises {

  nuevoPais = {
    country: ''
  };

  constructor(private http: HttpClient) {}

  guardarPais() {

    this.http.post(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country',
      this.nuevoPais,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({

      next: () => {
        alert('País guardado correctamente');

        this.nuevoPais.country = '';
      },

      error: (error) => {
        console.error('ERROR:', error);
        alert('Error al guardar el país');
      }

    });

  }

}