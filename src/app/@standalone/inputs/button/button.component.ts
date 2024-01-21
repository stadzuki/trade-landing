import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonTheme } from '@app/@standalone/inputs/button/button-theme';

@Component({
    selector: 'xm-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public theme: ButtonTheme = ButtonTheme.REGULAR;
    @Input() public fontSize: string = '24px';
}
