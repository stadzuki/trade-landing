import { CryptoSymbol } from '@core/crypto/enums/crypto-meta';

export const CRYPTO_ICON: { [key in CryptoSymbol]: string } = {
    BTC: 'crypto-icon-btc',
    ETH: 'crypto-icon-eth',
    XRP: 'crypto-icon-xrp',
    LTC: 'crypto-icon-ltc',
    BCH: 'crypto-icon-bch',
} as const;
