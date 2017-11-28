import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0)
      return { cannotConatainSpace: true }

    return null;
  }
  static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('ok');
        if(control.value === "Arps")
          resolve({ shouldBeUnique: true });
        else return(null);
      }, 2000);
    });
  }
}