import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../entity/pet';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Array<Pet>>(`${environment.api}/pet`);
  }
}
