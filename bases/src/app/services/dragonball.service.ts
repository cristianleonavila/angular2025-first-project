import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }

  characters = signal<Character[]>(this.loadData());

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }

  saveToLocalStorage = effect(() => {
    console.log(`Character count ${this.characters().length}`);
    localStorage.setItem('dbz_characters', JSON.stringify(this.characters()));
  });

  private loadData():Character[] {
    const characters = localStorage.getItem('dbz_characters');
    return characters ? JSON.parse(characters) : [];
  }
}
