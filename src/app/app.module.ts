import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatSidenavModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDygraphsModule} from 'ng-dygraphs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    HttpClientModule,
    NgDygraphsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
