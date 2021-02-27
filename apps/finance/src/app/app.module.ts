import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { SharedModule } from './shared';

@NgModule({
    declarations: [AppComponent, ExpensesComponent],
    imports: [BrowserModule, SharedModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
