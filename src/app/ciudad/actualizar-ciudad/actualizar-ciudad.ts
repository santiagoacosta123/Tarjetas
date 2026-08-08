import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-ciudad',
  imports: [FormsModule],
  templateUrl: './actualizar-ciudad.html',
  styleUrl: './actualizar-ciudad.css',
})
export class ActualizarCiudad {

  id: number = 0;

  ciudad = {
    city: "",
    country_id: 0
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  actualizarCiudad() {

    this.http.patch(
      "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/city?city_id=eq." + this.id,

      this.ciudad,

      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }

    ).subscribe({

      next: (respuesta) => {

        alert("Ciudad actualizada correctamente");

        this.router.navigate(['/listar-ciudad']);

      },

    });
  }

}