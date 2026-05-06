import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {
  // Exo 1

  age = signal<number>(18);
  isAdult = signal<boolean | undefined>(undefined);

  checkAdult() {
    this.isAdult.set(this.age() >= 18);
  }

  // Exo 2

  url = signal<string | undefined>(undefined);

  urls = signal<string[]>([]);

  addUrl(){
    this.urls.set([...this.urls(), this.url()!]);
    this.url.set(undefined);
  }
}
