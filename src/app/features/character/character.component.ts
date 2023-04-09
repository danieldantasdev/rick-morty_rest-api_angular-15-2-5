import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/model/character/character';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characters: Character = new Character();
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }
  getAllCharacters = () => {
    this.characterService.getAllCharacters().subscribe({
      next: (value) => {
        this.characters = value;
      },
    });
  };
}
