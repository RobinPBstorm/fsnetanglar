import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {}
