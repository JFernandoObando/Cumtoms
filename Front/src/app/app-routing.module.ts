// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './demo/authentication/login/login.component';
// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { RolesComponent } from './settings/roles/roles.component';
import { AuthGuard } from './demo/authentication/service/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }, 
      {
        path: 'roles', // Añade esta ruta para los roles
        component: RolesComponent
      },
      {
        path: 'user',
        loadComponent: () => import('./settings/user/user.component').then(m => m.UserComponent)
      }, 
      {
        path: 'user-edit/:id',
        loadComponent: () => import('./settings/user-edit/user-edit.component').then(m => m.UserEditComponent)
      }, 
      {
        path: 'user-delete/:id',
        loadComponent: () => import('./settings/user-delete/user-delete.component').then(m => m.UserDeleteComponent)
      }, 
    ]
  },
  {
    //cargar rutas completas
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      // {
      //   path: 'register',
      //   loadComponent: () => import('./demo/authentication/register/register.component')
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
