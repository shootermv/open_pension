import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPaiComponent } from './components/detail-pai/detail-pai.component';

const routes: Routes = [
  { path: '**', component: DetailPaiComponent },
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DetailPaiRoutingModule {}
