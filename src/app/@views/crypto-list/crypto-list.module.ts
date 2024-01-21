import { NgModule } from '@angular/core';
import { CryptoListComponent } from '@app/@views/crypto-list/crypto-list.component';
import { CryptoListService } from '@app/@views/crypto-list/services/crypto-list-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CryptoBadgeComponent } from '@app/@standalone/crypto-badge/crypto-badge.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [CryptoListComponent],
    imports: [
        HttpClientModule,
        CryptoBadgeComponent,
        CommonModule
    ],
    exports: [
        CryptoListComponent
    ],
    providers: [CryptoListService]
})
export class CryptoListModule {
}
