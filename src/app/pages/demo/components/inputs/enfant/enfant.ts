import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss',
})
export class Enfant {

  //Input
  firstname = input<string>();

  //Output
  nombre = output<number>();

  emit(){
    this.nombre.emit(42)
  }
}
