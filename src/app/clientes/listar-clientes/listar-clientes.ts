import { Component, ChangeDetectorRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface Cliente {
  customer_id: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email: string;
  address_id: number;
  active: boolean;
}

@Component({
  selector: 'app-listar-clientes',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-clientes.html',
  styleUrl: './listar-clientes.css',
})

export class ListarClientes {
  clientes: Cliente[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.verClientes();
  }

  verClientes() {
    this.http.get<Cliente[]>(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer`,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.clientes = respuesta;
        this.cdr.detectChanges();
      },
    })
  }
  eliminarCliente(id: number) {
    this.http.delete(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer?customer_id=eq.${id}`, {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (respuesta) => {
        alert('Cliente eliminado'+respuesta+ ' con ID: '+id);
        this.verClientes();
        this.cdr.detectChanges();
      }
    });
  }
  actualizarCliente(id: number) {
    this.router.navigate(['/actualizar-clientes', id]);
}
}