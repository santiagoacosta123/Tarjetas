import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-paises',
  imports: [FormsModule],
  templateUrl: './actualizar-paises.html',
  styleUrl: './actualizar-paises.css',
})
export class ActualizarPaises implements OnInit {

  idPais = '';

  pais = {
    country: ''
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.idPais = this.route.snapshot.paramMap.get('id') || '';

    this.cargarPais();
  }

  cargarPais() {

    this.http.get(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country?country_id=eq.' + this.idPais,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
        }
      }
    ).subscribe({
      next: (respuesta: any) => {

        this.pais.country = respuesta[0].country;

      }
    });

  }

  actualizarPais() {

    this.http.patch(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country?country_id=eq.' + this.idPais,
      this.pais,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next: () => {

        alert('País actualizado correctamente');

        this.router.navigate(['/listar-paises']);

      }
    });

  }

}