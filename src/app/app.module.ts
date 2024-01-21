import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/@standalone/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from '@app/@standalone/main/main.component';

const STANDALONE_COMPONENTS = [
    HeaderComponent,
    MainComponent
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        ...STANDALONE_COMPONENTS
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
