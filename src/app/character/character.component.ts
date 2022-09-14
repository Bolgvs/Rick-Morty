import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  id: any;
  character: any = null;
  constructor(private activatedRoute:ActivatedRoute, private characterService: CharacterService) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.characterService.returnCharacter(this.id)
    .subscribe( result => this.character = result)
   }

}
