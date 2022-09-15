import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  currentCharacter:any;
  message = '';

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.message = '';
    this.getCharacters(this.route.snapshot.paramMap.get('id'));
  }

  getCharacters(id: string | null): void {
    this.characterService.getItem(id)
      .subscribe(
        (character: null) => {
          this.currentCharacter = character;
          console.log(character);
        },
        (error: any) => {
          console.log(error);
        });
  }

  updateCharacter(): void {
    this.characterService.update(this.currentCharacter.id, this.currentCharacter)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The character was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCharacter(): void {
    this.characterService.delete(this.currentCharacter.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        });
  }

}
