import { Character } from '../../character/character';

export class Results {
  id: number = 0;
  name: string = '';
  type: string = '';
  dimension: string = '';
  residents: Character[] = [];
  url: string = '';
  created: string = '';
}
