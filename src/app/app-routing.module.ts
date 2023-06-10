import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  {
    path:'user',   loadChildren:()=>import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path:'**',   loadChildren:()=>import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [
    RouterModule,
    InputTextModule
  ]
})
export class AppRoutingModule { }
