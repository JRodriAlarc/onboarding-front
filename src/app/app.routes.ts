import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { StatusComponent } from './components/status/status.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { InformationFormComponent } from './components/forms/information-form/information-form.component';
import { LocationFormComponent } from './components/forms/location-form/location-form.component';
import { DocumentsFormComponent } from './components/forms/documents-form/documents-form.component';
import { SettingsFormComponent } from './components/forms/settings-form/settings-form.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicia Sesión',
        component: LoginComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: LoginFormComponent

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
        redirectTo: '',
        pathMatch: 'full'
    }
];
