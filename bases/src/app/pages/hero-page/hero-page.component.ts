import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal("Iron Man");
  age = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.update(currentName => currentName = "Spiderman");
    this.age.update(currentAge => currentAge = 22);
  }

  changeAge() {
    this.age.update(currentAge => currentAge = 60);
  }

  resetForm() {
    this.name.set("Iron Man");
    this.age.set(45);
  }
}
