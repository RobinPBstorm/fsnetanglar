import { Component, computed, signal, Signal } from '@angular/core';

import { FanService } from '../../../services/fan-service';
import { Person } from '../../../models/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fan-list',
  imports: [],
  templateUrl: './fan-list.html',
  styleUrl: './fan-list.scss',
})
export class FanList {
  fans: Signal<Person[]> = signal([]);

  constructor(
    private _service: FanService,
    private _router: Router,) {}

  ngOnInit() {
    this.fans = computed(() => this._service.fans());
  }

  removeFan($index: number) {
    this._service.removeFan($index);
  }

  ajouterFan() {
    this._router.navigate(['/exo/routing/fan-edit']);
  }

  seeFan(index: number) {
    this._router.navigate(['/exo/routing/fan',index]);
  }

  editFan(index: number) {
    this._router.navigate(['/exo/routing/fan-edit', index]);
  }
}
