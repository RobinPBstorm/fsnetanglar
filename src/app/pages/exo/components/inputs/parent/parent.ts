import { Component, computed, signal } from '@angular/core';
import { Enfant } from '../enfant/enfant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Enfant, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {

  item = signal<string>('item');

  list = signal<string[]>([]);

  add(){
    this.list.set([...this.list(), this.item()]);
  }

  removeItem(id: number) {
    this.list().splice(id, 1, "ram");
  }
}
