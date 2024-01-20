import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/@standalone/header/header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HeaderComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
