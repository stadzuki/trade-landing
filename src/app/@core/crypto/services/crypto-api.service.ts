import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { ICryptoData, ICryptoResponseData } from '@core/crypto/interfaces/crypto-data';

@Injectable({
    providedIn: 'root'
})
export class CryptoApiService {
    private readonly CRYPTO_DATA_API = 'https://api.coinlore.net/api/tickers/';

    constructor(private http: HttpClient) {
    }

    public getSpecificCrypto(cryptoIds: number[]): Observable<ICryptoData[]> {
        if (!cryptoIds?.length) return of([]);

        return this.getAllCryptoData()
            .pipe(
                map((res) =>
                    res?.filter((crypto) => cryptoIds.includes(+crypto.id))
                )
            )
    }

    public getAllCryptoData(): Observable<ICryptoData[]> {
        return this.http.get<ICryptoResponseData>(this.CRYPTO_DATA_API)
            .pipe(
                map((res) => res.data)
            );
    }
}
