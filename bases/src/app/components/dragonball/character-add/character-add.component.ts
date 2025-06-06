import { Component, effect, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})

export class CharacterAddComponent {

  name = signal("");
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),//this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.newCharacter.emit(newCharacter);
    this.reset();
  }


  reset() {
    this.name.set('');
    this.power.set(0);
  }

}
