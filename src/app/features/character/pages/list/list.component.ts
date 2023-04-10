import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Character} from 'src/app/core/model/character/character';
import {Methods} from "../../../../core/utils/methods";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() $characters: Character = new Character();
  methods: Methods = new Methods();

  constructor(private _router: Router) {
  }

  onClick(e: any) {
    this._router.navigate([`/characters/detail/${e}`]);
  }

  onMouseEnter(e: any): void {
    e.target.style.width = '100px'
    e.target.style.cursor = 'pointer'
    e.target.style.transition = '0.1s all linear'
  }

  onMouseOut(e: any): void {
    e.target.style.width = '80px'
  }
}
