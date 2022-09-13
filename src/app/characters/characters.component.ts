import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title = 'characters';

  characters: any = null;

  arr_numbers: any[] = new Array(8);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    for (var index = 0; index < 8; index++) {
      if (index < 5) {
        this.arr_numbers[index] =
          Math.floor(Math.random() * (800 - 1) + 1) + ',';
      } else {
        this.arr_numbers[index] = Math.floor(Math.random() * (800 - 1) + 1);
      }
    }

    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.arr_numbers)
      .subscribe(
        (result) => {
          this.characters = result;
        },
        (error) => {
          console.log('not working');
        }
      );
  }
}
