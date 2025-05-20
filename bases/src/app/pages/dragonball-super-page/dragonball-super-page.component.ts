import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  name = signal("");
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: "Broly", power: 90001},
    {id: 2, name: "Vegeta", power: 8000}
  ]);

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update((list) => [...list, newCharacter]);
    this.reset();
  }

  reset() {
    this.name.set('');
    this.power.set(0);
  }
}
