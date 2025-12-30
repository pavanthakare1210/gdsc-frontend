import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CenterListComponent } from './components/center-list/center-list.component';
import { CenterFormComponent } from './components/center-form/center-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CenterDetailsComponent } from './centers/center-details/center-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCentersComponent } from './admin-centers/admin-centers.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    CenterListComponent,
    CenterFormComponent,
    DashboardComponent,
    CenterDetailsComponent,
    AdminDashboardComponent,
    AdminCentersComponent,
    AdminTeachersComponent,
    AdminStudentsComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SharedModule
  
  ]
})
export class AdminModule { }
