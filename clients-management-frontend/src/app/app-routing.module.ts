import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'fidelity-management',
    loadChildren: () =>
      import('./fidelity-management/fidelity-management.module').then(
        (m) => m.FidelityManagementModule
      ),
  },
  { path: '**', redirectTo: 'fidelity-management' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
