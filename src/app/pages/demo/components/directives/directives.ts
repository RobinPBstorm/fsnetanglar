import { Component, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgForOf],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {
  // If Directives
  age = signal<number>(18);

  // For Directives
  users = signal<string[]>(['Ahmed', 'Damien', 'Médéric', 'Bart', 'Gavin']);
}
