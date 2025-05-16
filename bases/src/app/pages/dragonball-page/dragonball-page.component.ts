import { Component, computed, signal } from '@angular/core';
import { Character } from './interfaces/character';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: "Broly", power: 90001},
    {id: 2, name: "Vegeta", power: 8000},
    {id: 3, name: "Piccolo", power: 7000},
    {id: 4, name: "Yamcha", power: 500},
  ]);
}
