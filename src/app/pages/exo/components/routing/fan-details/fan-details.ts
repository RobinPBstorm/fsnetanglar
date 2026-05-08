import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../../models/Person';
import { FanService } from '../../../services/fan-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fan-details',
  imports: [DatePipe],
  templateUrl: './fan-details.html',
  styleUrl: './fan-details.scss',
})
export class FanDetails {
  index!: number;
  fan: Person | undefined;

  constructor(
    private _service: FanService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      if (params['index'] !== undefined) {
        this.index = params['index'];
        this.fan = this._service.getFan(this.index);

        if (!this.fan) {
          this._router.navigate(['/exo/routing/fan']);
        }
      }
    });
  }

  goToList() {
    this._router.navigate(['/exo/routing/fan']);
  }

  editFan() {
    this._router.navigate(['/exo/routing/fan-edit', this.index]);
  }
}
