import { Injectable } from '@angular/core';
import { CryptoApiService } from '@core/crypto/services/crypto-api.service';
import { map, Observable } from 'rxjs';
import { ICryptoBadge } from '@core/crypto/interfaces/crypto-badge';
import { CryptoMeta, CryptoSymbol } from '@core/crypto/enums/crypto-meta';
import { CryptoIndication } from '@core/crypto/enums/crypto-indication';
import { CRYPTO_ICON } from '@core/crypto/consts/const';
import { addCommasToNumber } from '@core/utils';

@Injectable()
export class CryptoListService {
    private readonly SPECIFIC_CRYPTO_LIST: number[] = [CryptoMeta.BTC, CryptoMeta.ETH, CryptoMeta.XRP, CryptoMeta.LTC, CryptoMeta.BCH];

    constructor(private cryptoApi: CryptoApiService) {
    }

    public getSpecificCryptoList(): Observable<ICryptoBadge[]> {
        return this.cryptoApi.getSpecificCrypto(this.SPECIFIC_CRYPTO_LIST)
            .pipe(
                map((res) => res?.map((crypto) => {
                    const symbol = crypto.symbol as CryptoSymbol;

                    return {
                        icon: CRYPTO_ICON[symbol],
                        symbol: crypto.symbol,
                        name: crypto.name,
                        price: `$${addCommasToNumber(crypto.price_usd)}`,
                        percent: `${crypto.percent_change_24h}%`,
                        indication: crypto.percent_change_24h.includes('-') ? CryptoIndication.FALL : CryptoIndication.GROWTH,
                    }
                }))
            );
    }
}
