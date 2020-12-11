import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoHomeComponent } from './crypto-home/crypto-home.component'

const routes: Routes = [
  {
    path : 'home',
    component : CryptoHomeComponent
  },
  {
    path : '',
    component : CryptoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
