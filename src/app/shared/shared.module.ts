
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';

// Shared Components
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { HeaderComponent } from '../core/components/header/header.component'; 

import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { MonthProgressComponent } from './components/month-progress/month-progress.component';
import { UserDistributionComponent } from './components/user-distribution/user-distribution.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ActivityTableComponent,
    NotificationListComponent,
  HeaderComponent,
    SidebarComponent,
    DashboardCardsComponent,
    MonthProgressComponent,
    UserDistributionComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

   
  ],
  exports: [
    ActivityTableComponent,
    NotificationListComponent,
    SidebarComponent,
   UserDistributionComponent,
   MonthProgressComponent,
    DashboardCardsComponent,
    HeaderComponent,
    
    
    
  
  ]
})
export class SharedModule { }
