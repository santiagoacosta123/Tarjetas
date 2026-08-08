import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-clientes',
  imports: [FormsModule],
  templateUrl: './actualizar-clientes.html',
  styleUrl: './actualizar-clientes.css',
})
export class ActualizarClientes {

  id: number = 0;

  cliente = {
    store_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    address_id: 0,
    active: true
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  actualizarCliente() {
    this.http.patch(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer?customer_id=eq.${this.id}`,
      this.cliente,
      {
        headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
    }
    ).subscribe({
      next: (respuesta) => {
        alert('Registro actualizado'+respuesta);
        this.router.navigate(['/listar-clientes'])
      }
    });

  }

}