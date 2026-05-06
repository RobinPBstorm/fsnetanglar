import { Component, signal } from '@angular/core';
import { ChronoPipe } from '../../../../shared/pipes/chrono-pipe';

@Component({
  selector: 'app-pipes',
  imports: [ChronoPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  interval: number | undefined;

  secondes = signal<number>(0);

  startCount() {
    this.interval = setInterval(() => {
      this.secondes.set(this.secondes() + 1);
    }, 1000);
  }

  stopCount() {
    clearInterval(this.interval);
    this.interval = undefined;
  }

  resetCount() {
    this.stopCount()
    this.secondes.set(0);
  }
}
