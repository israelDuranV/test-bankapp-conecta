import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HomeComponent } from './components/home/home.component';
import{ MiscuentasComponent } from './components/miscuentas/miscuentas.component';
import{ EnviardineroComponent } from './components/enviardinero/enviardinero.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'miscuentas', component: MiscuentasComponent},
    {path: 'enviardinero', component: EnviardineroComponent},
    {path: '',pathMatch:'full',redirectTo: 'miscuentas'},
    {path: '**',pathMatch:'full',redirectTo: 'miscuentas'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);