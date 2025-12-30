import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all shared components
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';

@NgModule({
  declarations: [
    ActivityTableComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActivityTableComponent,
    NotificationListComponent
  ]
})
export class SharedModule {}
