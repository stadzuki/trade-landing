import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CryptoListService } from '@app/@views/crypto-list/services/crypto-list-service.service';
import { ICryptoBadge } from '@core/crypto/interfaces/crypto-badge';
import { first } from 'rxjs';

@Component({
  selector: 'xm-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent implements OnInit {
    public cryptos: ICryptoBadge[] | undefined;

    constructor(private cryptoListService: CryptoListService,
                private cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.cryptoListService.getSpecificCryptoList()
            .pipe(first())
            .subscribe((res) => {
                this.cryptos = res;
                this.cdr.markForCheck();
            });
    }
}
