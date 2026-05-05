import { ChangeDetectionStrategy, Component, model, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Binding {
  // One way
  // Le signal permet de detecter un evenement qui rafraichi les changements de variables.
  oneway: WritableSignal<string> = signal('One Way Binding Example');

  // Two way binding
  twoway = signal('Two Way Binding Example');

  // Model : Concu pour le two way binding et le passage d'info entre components
  twowaymodel = model<string>()

  // Event Binding

  resetValues() {
    this.oneway.set("default");
    this.twoway.set("default");
    this.twowaymodel.set("default");
  }

  active = signal(true);

  onOff(){
    this.active.set(!this.active())
  }
}
