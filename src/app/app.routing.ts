import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RegistroArticuloComponent } from './views/articulos/registroarticulo.component';
import { RegistroPhotoComponent } from './views/fotosyvideos/registrophotos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'configuracion',
        loadChildren: './views/configurations/configuration.module#ConfigurationModule'
      },
      {
        path: 'photos',
        loadChildren: './views/fotosyvideos/photos.module#PhotosModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'articulos',
        loadChildren: './views/articulos/articulos.module#ArticulosModule'
      },
      {
        path: 'categorias',
        loadChildren: './views/categorias/categorias.module#CategoriasModule'
      },
      {
        path: 'donaciones',
        loadChildren: './views/donaciones/donaciones.module#DonacionesModule'
      },
      {
        path: 'newarticulo',
        component: RegistroArticuloComponent,
        data: {
          title: 'Registar articulo'
        }
      },
      {
        path: 'newphoto',
        component: RegistroPhotoComponent,
        data: {
          title: 'Registar foto o video'
        }
      }

    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
