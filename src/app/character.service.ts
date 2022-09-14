import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  return() {
    return this.http.get("https://rickandmortyapi.com/api/character/:id")
  }

  returnCharacter(id: any) {
    return this.http.get("https://rickandmortyapi.com/api/character/"+id)
   }
}
