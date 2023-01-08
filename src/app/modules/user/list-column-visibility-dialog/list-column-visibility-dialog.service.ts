import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {
  ColumnsDialogData,
  ColumnsDialogResponse,
  ListColumnVisibilityDialogComponent,
} from './list-column-visibility-dialog.component';

interface DialogConfig extends Omit<MatDialogConfig, 'data'> {
  data: ColumnsDialogData;
}

@Injectable()
export class ListColumnVisibilityDialogService {
  constructor(private _dialog: MatDialog) {}

  public open(config: DialogConfig) {
    return this._dialog.open<
      ListColumnVisibilityDialogComponent,
      ColumnsDialogData,
      ColumnsDialogResponse
    >(ListColumnVisibilityDialogComponent, {
      width: '600px',
      autoFocus: false,
      ...config,
    });
  }
}
