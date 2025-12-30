import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ExamManagementComponent } from '../exam-management/exam-management.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule 
  ],
  providers: [
    ExamManagementComponent
  ]
})
export class ServicesModule {}
