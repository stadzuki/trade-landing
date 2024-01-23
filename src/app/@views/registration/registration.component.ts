import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormStepProgressComponent } from '@app/@standalone/form-step-progress/form-step-progress.component';
import { IStepMeta } from '@core/form-step-progress/interfaces/step-meta';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment';
import { ButtonComponent } from '@app/@standalone/inputs/button/button.component';

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'DD MMMM, YYYY',
        dateA11yLabel: 'LL',
    },
};

@Component({
    selector: 'xm-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    standalone: true,
    imports: [
        FormStepProgressComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        ButtonComponent,
    ],
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: MY_FORMATS,
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
    public readonly FIRST_STEP: number = 1;
    public readonly SECOND_STEP: number = 2;
    public readonly COMPLETE_STEP: number = 3;

    public form!: FormGroup;
    public steps!: Array<IStepMeta>;

    public currentStep: number = this.FIRST_STEP;
    public passwordValidation: any = {};

    public ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)+\s*$/)]),
            birthday: new FormControl(null, [Validators.required, this.ageValidator]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, this.passwordValidator.bind(this), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/)]),
        });

        this.initSteps();
    }

    public register() {
        this.currentStep = this.COMPLETE_STEP
    }

    public nextStep() {
        this.currentStep = this.SECOND_STEP;
    }

    private initSteps(): void {
        this.steps = [
            {
                label: 'Step 1',
                stepNumber: this.FIRST_STEP,
                formControls: [
                    this.form.controls['name'],
                    this.form.controls['birthday']
                ],
            },
            {
                label: 'Step 2',
                stepNumber: this.SECOND_STEP,
                formControls: [
                    this.form.controls['email'],
                    this.form.controls['password']
                ],
            }
        ];
    }

    private passwordValidator(el: AbstractControl): ValidationErrors | any {
        if (!el?.value) return;

        this.passwordValidation = {
            isLengthCorrect: el.value.length >= 8 && el.value.length <= 15,
            includeSymbol: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(el.value),
            includeNumber: /\d/.test(el.value),
            includeLowerCase: /[a-z]/.test(el.value),
            includeUpperCase: /[A-Z]/.test(el.value),
        };

        if (Object.values(this.passwordValidation).includes(false)) return { valid: false }
    }

    private ageValidator(el: AbstractControl): ValidationErrors | any {
        if (!el?.value) return;

        const age = moment().year() - el.value.year();
        const isValid = age >= 18 && age <= 60;

        if (!isValid) {
            return {
                valid: false,
                errorString: age < 18 ? 'Minimum age requirements, 18 years old' : 'Maximum age requirements, 60 years old',
            };
        }
    }
}
