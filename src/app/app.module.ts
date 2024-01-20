import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        AppRouterModule
    ]
})
export class AppModule {
}
