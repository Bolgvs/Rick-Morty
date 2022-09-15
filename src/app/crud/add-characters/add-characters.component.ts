import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character.model';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent implements OnInit {

  character: Character = {
    name:  '',
    status:  '',
    species:  '',
    gender:  '',
    origin:  '',
    location:  '',
    image:  ''
  };
  isCharacterAdded = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

    // Add New
    addCharacter(): void {
      const data = {
        name: this.character.name,
        status: this.character.status,
        species:  this.character.species,
        gender:  this.character.gender,
        origin:  this.character.origin,
        location:  this.character.location,
        image:  this.character.image
      };
      if (!data.name) {
        alert('Please add name!');
        return;
      }

      this.characterService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.isCharacterAdded = true;
          },
          error => {
            console.log(error);
          });
    }

    // Reset on adding new
    newCharacter(): void {
      this.isCharacterAdded = false;
      this.character = {
        name:  '',
        status:  '',
        species:  '',
        gender:  '',
        origin:  '',
        location:  '',
        image:  ''
      };
    }
}
