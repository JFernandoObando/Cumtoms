import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service'; // Ajusta la ruta según tu estructura de carpetas
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss'],
  standalone: true,
  imports: [ CommonModule],
  
})
export class RolesTableComponent implements OnInit {

  roles: any[] = []; // Inicializa el array para los roles

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error al obtener los roles', error);
      }
    );
  }

  editRole(role: any): void {
    console.log('Editando rol:', role);
    // Aquí puedes redirigir a una página de edición o abrir un modal
  }

  deleteRole(id: number): void {
    this.roleService.deleteRole(id).subscribe(
      () => {
        // Eliminar el rol de la lista local
        this.roles = this.roles.filter(role => role.id !== id);
        console.log('Rol eliminado con éxito');
      },
      (error) => {
        console.error('Error al eliminar el rol', error);
      }
    );
  }
}