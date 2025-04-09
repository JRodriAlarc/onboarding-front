import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatusComponent } from './components/status/status.component';
import { InformationFormComponent } from './components/forms/information-form/information-form.component';
import { LocationFormComponent } from './components/forms/location-form/location-form.component';
import { DocumentsFormComponent } from './components/forms/documents-form/documents-form.component';
import { SettingsFormComponent } from './components/forms/settings-form/settings-form.component';
import { HeaderFormsComponent } from './components/header-forms/header-forms.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
          {
            path: '',
            component: HeaderFormsComponent,
            children: [
              {
                path: 'login',
                component: LoginFormComponent,
                title: 'Inicia Sesión'
              },
              {
                path: 'register',
                component: RegisterFormComponent,
                title: 'Crea una Cuenta'
              },
              {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
              }
            ]
          }
        ]
    },
    {
        path: 'home',
        title: 'Inicio',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: StatusComponent
            },
            {
                path: 'information',
                title: 'Información',
                component: InformationFormComponent
            }, 
            {
                path: 'location',
                title: 'Ubicación',
                component: LocationFormComponent
            },
            {
                path: 'documents',
                title: 'Documentos',
                component: DocumentsFormComponent
            },
            {
                path: 'settings',
                title: 'Ajustes',
                component: SettingsFormComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
