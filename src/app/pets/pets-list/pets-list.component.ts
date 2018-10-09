import { Component, OnInit } from '@angular/core';
import { PetsService } from '../service/pets.service';
import { Observable } from 'rxjs';
import { Pet } from '../entity/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {
  pets$: Observable<Array<Pet>>;

  constructor(private readonly petsService: PetsService) { }

  ngOnInit() {
    this.pets$ = this.petsService.list();
  }

}
