import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  declarations: [
    StudentDashboardComponent,
  
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
  
  ]
})
export class StudentModule { }
