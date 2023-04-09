import { Episode } from '../../episode/episode';
import { Origin } from '../../origin/origin';

export class Results {
  id: number = 0;
  name: string = '';
  status: string = '';
  species: string = '';
  type: string = '';
  gender: string = '';
  origin: Origin = new Origin();
  location: Location = new Location();
  image: string = '';
  episodes: Episode[] = [];
  url: string = '';
  created: string = '';
}
