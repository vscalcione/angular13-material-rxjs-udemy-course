import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FidelityManagementComponent } from './fidelity-management.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: FidelityManagementComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    FidelityManagementComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [ToolbarComponent, MainContentComponent, SidenavComponent],
})
export class FidelityManagementModule {}
