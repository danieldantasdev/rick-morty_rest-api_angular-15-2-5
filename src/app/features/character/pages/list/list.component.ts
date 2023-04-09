import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/model/character/character';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters: Character = new Character();
  first: string = '';
  rows: string = '';
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters = () => {
    this.characterService.getAllCharacters().subscribe({
      next: (value) => {
        this.characters = value;
        this.first = value.info.next;
      },
    });
  };
}
