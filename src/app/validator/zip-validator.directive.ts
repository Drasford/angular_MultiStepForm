import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ZipValidator(control: AbstractControl): {[key:string]:any} | null{
    const zipCode: number = control.value;
    if(zipCode == 1000){
        return null;
    }
    else if(zipCode==1200){
        return null;
    }
    else{
        return {'ZipValidator':true};
    }
}