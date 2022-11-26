import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]):ValidatorFn {
    const domainString = domains.join('|');
    const re = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`)
    return (control) => {
        return (control.value === '' || re.test(control.value)) ? null : { appEmailValidator: true } ;
    } 
}
