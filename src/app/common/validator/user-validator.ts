import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserValidator {
    static shouldContainSpace(control: AbstractControl): ValidationErrors | null {
        console.log(control);
        if (control.value.indexOf(' ') >= 0) {
            return { shouldContainSpace: true };
        }
        return null;
    }
    static uniqueUser(control: AbstractControl): Promise<ValidationErrors | null> {
        console.log(control);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'dinesh') {
                    resolve({ uniqueUser: true });
                }
                resolve(null);
            }, 2000);
        });
    }
}
