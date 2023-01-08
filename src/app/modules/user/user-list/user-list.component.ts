import { Component } from '@angular/core';
import { ListColumnVisibilityDialogService } from '../list-column-visibility-dialog/list-column-visibility-dialog.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  readonly columnMap = Object.freeze({
    id: {
      label: 'ID',
      description: 'ID',
    },
    name: {
      label: 'Name',
      description: 'Name',
    },
    email: {
      label: 'Email',
      description: 'Email',
    },
    actions: {
      label: '',
      description: 'Actions',
    },
  });

  displayedColumns = Object.keys(this.columnMap);

  dataSource = [
    { id: 1, name: 'Fulano', email: 'fulano@mail.com' },
    { id: 1, name: 'Beltrano', email: 'beltrano@mail.com' },
    { id: 1, name: 'Cicrano', email: 'cicrano@mail.com' },
    { id: 1, name: 'Fulano', email: 'fulano@mail.com' },
    { id: 1, name: 'Beltrano', email: 'beltrano@mail.com' },
    { id: 1, name: 'Cicrano', email: 'cicrano@mail.com' },
    { id: 1, name: 'Fulano', email: 'fulano@mail.com' },
    { id: 1, name: 'Beltrano', email: 'beltrano@mail.com' },
  ];

  constructor(private _dialog: ListColumnVisibilityDialogService) {}

  openColumnVisibilityModal() {
    this._dialog
      .open({
        data: {
          columnMap: this.columnMap,
          displayedColumns: this.displayedColumns,
        },
      })
      .afterClosed()
      .subscribe((displayedColumns) => {
        if (displayedColumns) {
          this.displayedColumns = displayedColumns;
        }
      });
  }
}
