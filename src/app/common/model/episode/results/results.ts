import { Character } from '../../character/character';
import { Episode } from '../../episode/episode';
import { Origin } from '../../origin/origin';

export class Results {
  id: number = 0;
  name: string = '';
  air_date: string = '';
  episode: string = '';
  characters: Character[] = [];
  url: string = '';
  created: string = '';
}
