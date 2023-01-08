import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ListColumnVisibilityDialogService } from './list-column-visibility-dialog.service';
import { ListColumnVisibilityDialogComponent } from './list-column-visibility-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [ListColumnVisibilityDialogComponent],
  providers: [ListColumnVisibilityDialogService],
  declarations: [ListColumnVisibilityDialogComponent],
  entryComponents: [ListColumnVisibilityDialogComponent],
})
export class ListColumnVisibilityDialogModule {}
