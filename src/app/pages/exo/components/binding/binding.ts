import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.scss',
})
export class Binding {
  age = model<number>();

  message = signal<string | undefined>(undefined);

  // Ne jamais oublier les () apres un type signal pour recuperer la valeur stockée dedans.
  checkAge() {
    if (!this.age()) {
      return;
    }

    if (this.age()! >= 18) {
      this.message.set('🫀');
    } else {
      this.message.set('💩');
    }
  }
}
