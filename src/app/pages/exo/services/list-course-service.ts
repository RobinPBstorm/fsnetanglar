import { Injectable, signal } from '@angular/core';
import { ShoppingList } from '../models/shopping-list';

@Injectable({
  providedIn: 'root',
})
export class ListCourseService {
  list = signal<ShoppingList>(new ShoppingList());

 addItem(item: string, quantity: number) {
   this.list.update((listToUpdate) => {
     const line = listToUpdate.lines.find((line) => line.name === item);

     if (line) {
       line.quantity += quantity;
     } else {
       listToUpdate.lines.push({ name: item, quantity: quantity });
     }
     return listToUpdate;
   });
 }
 removeOneItem(item: string) {
   this.list.update((listToUpdate: ShoppingList) =>  {
     const lineToRemove = listToUpdate.lines.find((line) => line.name === item);

     if (lineToRemove) {
       if (lineToRemove.quantity <= 1) {
         listToUpdate.lines = listToUpdate.lines.filter((line) => line !== lineToRemove);
       }
       else {
         lineToRemove!.quantity -= 1;
       }
     }
     return listToUpdate;
   });
 }

}
