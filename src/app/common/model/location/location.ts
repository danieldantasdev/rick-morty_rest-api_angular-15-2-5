import { Info } from './info/info';
import { Results } from './results/results';

export class Location {
  info: Info = new Info();
  results: Results[] = [];
}
