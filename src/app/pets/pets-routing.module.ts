import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsListComponent } from './pets-list/pets-list.component';

const routes: Routes = [
  {
    path: '',
    component: PetsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
