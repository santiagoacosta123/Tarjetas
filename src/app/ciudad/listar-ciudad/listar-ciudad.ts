import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface Ciudad {
  city_id: number;
  city: string;
  country_id: number;
}

@Component({
  selector: 'app-listar-ciudad',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-ciudad.html',
  styleUrl: './listar-ciudad.css',
})
export class ListarCiudad {

  ciudades: Ciudad[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.traerCiudades();
  }

  traerCiudades() {

    this.http.get<Ciudad[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/city',
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    )
    .subscribe({
      next: (respuesta) => {

        console.log('RESPUESTA LISTADO:', respuesta);

        this.ciudades = respuesta;

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('ERROR LISTANDO CIUDADES:', error);

      }
    });
  }

  eliminarCiudad(city_id: number) {

    this.http.delete(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/city?city_id=eq.' + city_id,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    )
    .subscribe({
      next: () => {

        alert('Registro eliminado correctamente');

        this.traerCiudades();

      },

      error: (error) => {

        console.error('ERROR ELIMINANDO:', error);

      }
    });
  }

  llevarAActualizar(city_id: number) {

    this.router.navigate(['/actualizar-ciudad', city_id]);

  }

}