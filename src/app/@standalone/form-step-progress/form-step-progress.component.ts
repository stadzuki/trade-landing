import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IStepMeta } from '@core/form-step-progress/interfaces/step-meta';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'xm-form-step-progress',
    templateUrl: './form-step-progress.component.html',
    styleUrls: ['./form-step-progress.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormStepProgressComponent implements OnInit, OnDestroy {
    @Input({ required: true }) public stepMeta!: IStepMeta;
    @Input() public isActive: boolean = false;

    public progressValue: number = 0;

    public get isActiveOrCompleted(): boolean {
        return this.progressValue >= 100 || this.isActive;
    }

    private subscriptions: Subscription[] = [];

    constructor(private cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.calculateProgressValue();
        if (this.stepMeta.formControls?.length) {
            this.stepMeta.formControls.forEach((control) => {
                const subscription = control.valueChanges.subscribe(() => {
                    this.cdr.detectChanges();
                    this.calculateProgressValue();
                });
                this.subscriptions.push(subscription);
            });
        }
    }

    public ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
        this.subscriptions = [];
    }

    private calculateProgressValue(): void {
        if (this.stepMeta.formControls) {
            const controlsCount = this.stepMeta.formControls.length;
            if (!controlsCount) return;

            const increaseValue = 100 / controlsCount;
            const validFields = this.stepMeta.formControls.filter((control) => control.dirty && control.valid).length;

            this.progressValue = Math.ceil(validFields * increaseValue);
            this.cdr.markForCheck();
        }
    }
}
