import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/model/character/character';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() $characters: Character = new Character();

  constructor(private _router: Router) {}

  getSeverity(status: string): 'danger' | 'success' | 'info' | 'warning' {
    switch (status) {
      case 'Dead':
        return 'danger';

      case 'Alive':
        return 'success';

      case 'unknown':
        return 'info';
    }
    return 'danger';
  }

  onClick(e: any) {
    this._router.navigate([`/characters/detail/${e}`]);
  }
}
