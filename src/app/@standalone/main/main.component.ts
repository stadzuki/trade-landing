import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@app/@standalone/inputs/button/button.component';

@Component({
    selector: 'xm-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent]
})
export class MainComponent {

}
