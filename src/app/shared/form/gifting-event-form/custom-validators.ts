import { FormControl } from '@angular/forms';

export class CustomValidators {

  /**
   * Function to control email with custom validator
   */
  static email(control: FormControl) {
    // returns control
    return /^\w+\.\w+@\w+\.com$/.test(control.value) ? null : {
      email: true
    };
  }
}
