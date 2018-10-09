import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsListComponent } from './pets-list/pets-list.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatListModule,
  ],
  declarations: [PetsListComponent]
})
export class PetsModule { }
