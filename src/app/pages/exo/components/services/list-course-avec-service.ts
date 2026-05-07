import { Component, computed, Signal, signal } from '@angular/core';
import { ListCourseService } from '../../services/list-course-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingList } from '../../models/shopping-list';

@Component({
  selector: 'app-services',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './list-course-avec-service.html',
  styleUrl: './list-course-avec-service.scss',
})
export class ListCourseAvecService {
  list: Signal<ShoppingList> = signal(new ShoppingList());

  item: string = '';
  quantity: number = 0;

  constructor(private _service: ListCourseService) {}

  ngOnInit() {
    this.list = computed(() => this._service.list());
  }

  add() {
    if (this.item.replaceAll(' ', '') !== '' && this.quantity > 0) {
      this._service.addItem(this.item, this.quantity);
    }
  }
  addOne(item : string) {
    this._service.addItem(item, 1);
  }

  removeOne(item: string) {
    this._service.removeOneItem(item);
  }

}
