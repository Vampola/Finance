import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpencesComponent } from './expences/expences.component';

const appRoutes: Routes = [
  { path: 'expences', component: ExpencesComponent }
];

@NgModule({
  declarations: [AppComponent, ExpencesComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
