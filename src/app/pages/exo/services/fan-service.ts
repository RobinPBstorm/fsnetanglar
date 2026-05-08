import { Injectable, signal, WritableSignal } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root',
})
export class FanService {
  fans: WritableSignal<Person[]> = signal<Person[]>([]);

  addFan(person: Person) {
    this.fans.set([...this.fans(), person]);
  }
  removeFan(index: number) {
    this.fans.update(persons => {
      persons.splice(index);
      return persons;
    })
  }

  getFan(index: number) {
    if (0 <= index && index < this.fans().length) {
      return this.fans()[index];
    } else {
      return;
    }
  }

  updateFan(index: number, person: Person) {
    if (0 <= index && index < this.fans().length) {
      this.fans()[index] = person;
      return this.fans()[index];
    } else {
      return;
    }
  }
}
