import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/@standalone/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from '@app/@standalone/main/main.component';
import { CryptoBadgeComponent } from '@app/@standalone/crypto-badge/crypto-badge.component';
import { CryptoListModule } from '@app/@shared/crypto-list/crypto-list.module';

const STANDALONE_COMPONENTS = [
    HeaderComponent,
    MainComponent,
    CryptoBadgeComponent,
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        CryptoListModule,
        ...STANDALONE_COMPONENTS
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
