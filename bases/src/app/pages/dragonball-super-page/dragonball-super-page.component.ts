import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: "Broly", power: 90001},
    {id: 2, name: "Vegeta", power: 8000}
  ]);

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }

}
