import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatSidenavModule } from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
