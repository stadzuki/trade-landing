import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICryptoBadge } from '@core/crypto/interfaces/crypto-badge';
import { CryptoIndication } from '@core/crypto/enums/crypto-indication';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'xm-crypto-badge',
    templateUrl: './crypto-badge.component.html',
    styleUrls: ['./crypto-badge.component.scss'],
    imports: [CommonModule],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoBadgeComponent implements OnInit {
    @Input({ required: true }) public cryptoBadge: ICryptoBadge | undefined;

    public indicationPath: string = '';
    public cryptoIndication = CryptoIndication;

    private readonly INDICATION_IMG_PATH = 'assets/img/';
    private readonly GROWTH_IMG = 'growth-indication.svg';
    private readonly FALL_IMG = 'fall-indication.svg';

    public ngOnInit() {
        if (this.cryptoBadge) {
            const indicationPath = this.cryptoBadge.indication === CryptoIndication.GROWTH ? this.GROWTH_IMG : this.FALL_IMG;
            this.indicationPath = this.INDICATION_IMG_PATH + indicationPath;
        }
    }
}
