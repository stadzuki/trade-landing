import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'xm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
