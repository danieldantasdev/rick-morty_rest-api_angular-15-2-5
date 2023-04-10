import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from 'src/app/core/model/character/character';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  characters: Character = new Character();
  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllCharacters = ():void => {
    this.subscription = this._characterService.getAllCharacters().subscribe({
      next: (value) => {
        this.characters = value;
      },
    });
  };
}
