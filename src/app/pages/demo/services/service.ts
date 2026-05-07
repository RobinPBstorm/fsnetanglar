import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {

  list =  signal<string[]>([]);


  createItem(item: string) {
    this.list.set([...this.list(), item]);
  }
}
