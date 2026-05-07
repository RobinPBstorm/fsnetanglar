import { Component, computed, Signal, signal } from '@angular/core';
import { Service } from '../../services/service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-component',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './service-component.html',
  styleUrl: './service-component.scss',
})
export class ServiceComponent {
  listLocal: Signal<string[]> = signal<string[]>([]);

  item: string = '';

  constructor(private _service: Service) {}

  ngOnInit() {
    this.listLocal = computed(() => this._service.list());
  }

  add() {
    if (this.item.replaceAll(" ","") !== "") {
      this._service.createItem(this.item);
    }
  }
}
