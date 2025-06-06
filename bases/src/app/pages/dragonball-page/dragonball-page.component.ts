import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal("");
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: "Broly", power: 90001}
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
