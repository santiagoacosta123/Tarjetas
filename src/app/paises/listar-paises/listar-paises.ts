import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Pais {
  country_id: number;
  country: string;
}

@Component({
  selector: 'app-listar-paises',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-paises.html'
})
export class ListarPaises implements OnInit {

  paises: Pais[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listarPaises();
  }

  listarPaises(): void {

    this.http.get<Pais[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country',
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({

      next: (respuesta: Pais[]) => {

        console.log('PAISES RECIBIDOS:', respuesta);

        this.paises = respuesta;

      },

      error: (error) => {

        console.error('ERROR AL LISTAR:', error);

        alert('Error al listar los países');

      }

    });
  }

  eliminarPais(id: number): void {

    if (!confirm('¿Desea eliminar este país?')) {
      return;
    }

    this.http.delete(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country?country_id=eq.${id}`,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
        }
      }
    ).subscribe({

      next: () => {

        alert('País eliminado correctamente');

        this.listarPaises();

      },

      error: (error) => {

        console.error('ERROR AL ELIMINAR:', error);

        alert('Error al eliminar el país');

      }

    });

  }

}