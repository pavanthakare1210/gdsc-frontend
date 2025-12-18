import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherStudentsComponent } from './teacher-students/teacher-students.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TeacherStudentsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
]
})
export class TeacherModule {}
