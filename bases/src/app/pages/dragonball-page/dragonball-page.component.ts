import { Component, signal } from '@angular/core';
import { Character } from './interfaces/character';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: "Broly", power: 90001},
    {id: 2, name: "Vegete", power: 8000},
    {id: 3, name: "Piccolo", power: 7000}
  ]);
}
