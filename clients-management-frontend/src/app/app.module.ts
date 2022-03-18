import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './demo/components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexboxComponent } from './demo/components/flexbox/flexbox.component';
@NgModule({
  declarations: [AppComponent, TestComponent, FlexboxComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
