import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-checkout-stepper',
  templateUrl: './checkout-stepper.component.html',
  styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent {
  @Input() currentStep: 'shipping' | 'payment' = 'shipping';

  steps = [
    { name: 'Envío', completed: false },
    { name: 'Resumen y pago', completed: false }
  ];

  ngOnInit() {
    this.updateSteps();
  }

  updateSteps() {
    if (this.currentStep === 'shipping') {
      this.steps[0].completed = true;
      this.steps[1].completed = false;
    } else if (this.currentStep === 'payment') {
      this.steps[0].completed = true;
      this.steps[1].completed = true;
    }
  }
}
