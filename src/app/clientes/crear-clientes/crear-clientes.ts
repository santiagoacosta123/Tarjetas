import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
@Component({
    selector: 'app-crear-clientes',
    imports: [FormsModule, CommonModule],
    templateUrl: './crear-clientes.html',
    styleUrl: './crear-clientes.css',
})
export class CrearClientes {
cliente = {
    store_id: 1,
    first_name: '',
    last_name: '',
    email: '',
    address_id: 6,
    active: true
};
constructor(private http: HttpClient) {}
crearCliente() {
        this.http.post(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer`, 
            this.cliente,
        {
        headers: {
            apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
            Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
            'Content-Type': 'application/json'
        }
    }).subscribe({
        next: (respuesta) => {
            console.log(respuesta);
            alert('Cliente creado con éxito');
        },
    });
}
}