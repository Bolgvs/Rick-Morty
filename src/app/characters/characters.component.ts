import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.retrieveCharacters();
  }
  retrieveCharacters(): void {
    this.characterService.list()
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log('not working');
        }
      );
  }
}
