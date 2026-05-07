import { AbstractControl, ValidatorFn } from '@angular/forms';

export function DescriptionContent (blackListWords: string[] = []): ValidatorFn {
  return (control:AbstractControl) => {
    if (!control.value) {
      return null;
    }

    if (control.value) {
      if (control.value.includes("chartreuse")) {
        return { invalidContent: "chartreuse"}
      } else {
        for (const word of blackListWords) {
          if (control.value.includes(word)) {
            return { invalidContent: word };
          }
        }
      }
    }

    return null;
  }
}
