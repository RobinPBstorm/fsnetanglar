import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page1',
  imports: [RouterLink, FormsModule],
  templateUrl: './page1.html',
  styleUrl: './page1.scss',
})
export class Page1 {
  index: number = -1;

  constructor(private router: Router) {}

  navigateToPage2() {
    //this.router.navigate(['demo', 'routing', 'page2']);
    this.router.navigate(['/demo/routing/page2']);
  }

  navigateToPage2WithIndex() {
    this.router.navigate(['/demo/routing/page2', this.index]);
  }
}
