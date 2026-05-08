import { AbstractControl } from '@angular/forms';

export function ageMinimum (min: number | undefined = undefined) {
  return (control: AbstractControl ) => {
    if (!control.value) {
      return null;
    }

    if (new Date(control.value) >= new Date()) {
      return {
        invalidDate: "Pas de date d'aujourd'hui ou ultérieure acceptée",
      };
    }

    if (min !== undefined) {
      const today: Date = new Date();
      const birthDate: Date = new Date(control.value);
      if (new Date(today.getTime() - birthDate.getTime()).getFullYear() - 1970 < min) {
        return {
          ageMin: {
            expected: min,
            actual: new Date(today.getTime() - birthDate.getTime()).getFullYear() - 1970,
          },
        };
      }
    }


    return null;
  }
}
