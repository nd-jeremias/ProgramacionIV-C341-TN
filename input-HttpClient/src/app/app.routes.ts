import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Error } from './pages/error/error';
import { Perfil } from './pages/perfil/perfil';

export const routes: Routes = [
    { path: '', component: Bienvenida },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'error', component: Error },
    { path: 'perfil', component: Perfil },
];
