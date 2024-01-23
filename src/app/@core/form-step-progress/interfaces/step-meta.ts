import { AbstractControl, FormControl } from '@angular/forms';

export interface IStepMeta {
    label: string;
    stepNumber: number;
    formControls?: FormControl[] | AbstractControl[];
}
