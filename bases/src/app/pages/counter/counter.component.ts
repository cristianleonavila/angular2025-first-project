import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  public counter:number = 10;

  public counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSignal.update(current => current += 1);
      console.log(`Tick ${this.counterSignal()}`);

      //this.counterSignal.update(current => current += 1);
    }, 2000);
  }

  increase() {
    this.counter++;
    this.counterSignal.update(current => current += 1);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
