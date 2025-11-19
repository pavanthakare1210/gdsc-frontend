import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CenterListComponent } from './components/center-list/center-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'centers', pathMatch: 'full' },

  { path: 'centers', component: CenterListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
