import { CryptoIndication } from '@core/crypto/enums/crypto-indication';

export interface ICryptoBadge {
    icon: string;
    symbol: string;
    name: string;
    price: string;
    percent: string;
    indication: CryptoIndication;
}
