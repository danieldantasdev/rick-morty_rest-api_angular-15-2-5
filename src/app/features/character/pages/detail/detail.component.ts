import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Results} from 'src/app/core/model/character/results/results';
import {CharacterService} from 'src/app/core/services/character/character.service';
import {Methods} from "../../../../core/utils/methods/methods";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  methods: Methods = new Methods();

  id: number = 0;
  character?: Results;

  constructor(
    private _route: ActivatedRoute,
    private _characterService: CharacterService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getCharacter();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCharacter() {
    this._characterService.getCharacter(this.id).subscribe({
      next: (value) => {
        this.character = value;
        // console.log(this.character?.id);
      },
    });
  }

  onBack = () => {
    window.history.back();
  };
}
