import { Directive } from '@angular/core';
import { Validator, NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator {
  constructor(private service:DataService) { }

  
  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    
    return this.service.researchParEmailService(control.value).pipe(
      map(res => {

        if(res === '???') {
          return { emailExist : res}
        } else {
          return null;
        }
      })
    )
  }
 

}
