import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../services/center.service';
import { MatDialog } from '@angular/material/dialog';
import { CenterFormComponent } from '../center-form/center-form.component';
import { Center } from '../../models/center.model';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html'
})
export class CenterListComponent implements OnInit {

  centers: Center[] = [];
  filteredCenters: Center[] = [];
  searchTerm = '';

  constructor(
    private centerService: CenterService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCenters();
  }

  loadCenters() {
    this.centerService.getCenters().subscribe((res: Center[]) => {
      this.centers = res;             
      this.filteredCenters = res;     
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCenters = this.centers.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.code.toLowerCase().includes(term)
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CenterFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadCenters();
      }
    });
  }

  openEditDialog(center: Center) {
    const dialogRef = this.dialog.open(CenterFormComponent, {
      width: '500px',
      data: center
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.loadCenters();
      }
    });
  }

  deleteCenter(id: number) {
    if (!confirm('Delete this center?')) return;

    this.centerService.deleteCenter(id).subscribe(() => {
      this.loadCenters();
    });
  }

  toggleStatus(center: Center) {
    const newStatus = center.status ? "INACTIVE" : "ACTIVE";

    this.centerService.toggleStatus(center.id, newStatus)
      .subscribe(() => {
        center.status = !center.status;
      });
  }
}
