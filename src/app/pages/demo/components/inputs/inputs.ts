import { Component, signal } from '@angular/core';
import { Enfant } from './enfant/enfant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  imports: [Enfant, FormsModule],
  templateUrl: './inputs.html',
  styleUrl: './inputs.scss',
})
export class Inputs {

  // Input
  firstnameParent = signal<string | undefined>(undefined);

  // Output

  nombreDeEnfant = signal<number | undefined>(undefined);

  receiveNumber(value: number) {
    this.nombreDeEnfant.set(value);
  }

}
