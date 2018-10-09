import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const sharedModules = [
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  ReactiveFormsModule,
  FontAwesomeModule
];

@NgModule({
  imports: sharedModules,
  exports: sharedModules,
})
export class SharedModule {}
