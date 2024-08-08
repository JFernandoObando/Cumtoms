import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
// sad
export class RolesComponent {
  roleCode: string = '';
  roleName: string = '';

  constructor(private roleService: RoleService, private router: Router) {}

  onSubmit() {
    const roleData = {
      roleCode: this.roleCode,
      roleName: this.roleName,
    };

    this.roleService.createRole(roleData).subscribe({
      next: (response) => {
        alert('Rol creado exitosamente');
        this.router.navigate(['/settings/roles']); // Redirige a la lista de roles
      },
      error: (error) => {
        alert('Error al crear el rol');
        console.error('Error:', error);
        if (error.status === 0) {
          console.error('No se pudo conectar al backend. Verifica la URL del API y la configuración de CORS.');
        } else if (error.status >= 400 && error.status < 500) {
          console.error('Error del cliente:', error.message);
        } else if (error.status >= 500) {
          console.error('Error del servidor:', error.message);
        }
      }
    });
  }
}
