import {AbstractControl} from '@angular/forms';
export class CustomValidator {
  // if the valus is valid this method will retun null
  // else it will return a JSON object

  static checkEven(ctrl:AbstractControl):any {
     if(parseInt(ctrl.value) % 2 === 0 ) {
       return null; // valid
     }else {
       return {even:false}; // invalid
     }
  }

}
