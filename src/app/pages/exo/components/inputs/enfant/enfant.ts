import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss',
})
export class Enfant {

  list = input<string[]>();

  idToRemove = output<number>();

  remove (id: number) {
    this.idToRemove.emit(id);
  }
}
