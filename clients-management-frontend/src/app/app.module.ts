import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './demo/components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexboxComponent } from './demo/components/flexbox/flexbox.component';

import { FidelityManagementComponent } from './components/fidelity-management/fidelity-management.component';
import { ToolbarComponent } from './components/fidelity-management/components/toolbar/toolbar.component';
import { MainContentComponent } from './components/fidelity-management/components/main-content/main-content.component';
import { SidebarComponent } from './components/fidelity-management/components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FlexboxComponent,
    FidelityManagementComponent,
    ToolbarComponent,
    MainContentComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
