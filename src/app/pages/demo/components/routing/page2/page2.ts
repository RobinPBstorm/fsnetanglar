import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [RouterLink],
  templateUrl: './page2.html',
  styleUrl: './page2.scss',
})
export class Page2 {
  idReceived: number|undefined;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.idReceived = params['id'];
      }
    })
  }
}
