import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Character } from '../../model/character/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly URL: string = `${environment.BASE_URL}/character`;

  constructor(private http: HttpClient) {}

  getAllCharacters = (): Observable<Character> => {
    return this.http.get<Character>(this.URL);
  };

  getCharacter = (id: number): Observable<Character> => {
    return this.http.get<Character>(`${this.URL}/${id}`);
  };
}
