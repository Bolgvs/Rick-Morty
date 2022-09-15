import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character.model';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters?: Character[];
  currentCharacters: Character = {};
  currentIndex = -1;
  name = '';

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
      this.getAllCharacters();
    }

     // Get list
     getAllCharacters(): void {
      this.characterService.list()
        .subscribe(
          (characters: any) => {
            this.characters = characters;
          },
          (error: any) => {
            console.log(error);
          });
    }

    // Delete action
    deleteCharacters(id:number){
      this.characterService.delete(id)
      .subscribe(
        response => {
          this.getAllCharacters();
        },
        error => {
          console.log(error);
        });
    }

    // Search items
    searchByName(): void {
      this.characterService.filterByName(this.name)
        .subscribe(
          characters => {
            this.characters = characters;
          },
          error => {
            console.log(error);
          });
    }
  }
