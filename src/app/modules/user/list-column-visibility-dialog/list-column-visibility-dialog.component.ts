import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

export interface ColumnsDialogData {
  displayedColumns: string[];
  columnMap: Record<string, { label: string; description: string }>;
}

export type ColumnsDialogResponse = string[];

const MINIMUM_VISIBLE_COLUMNS = 2;

@Component({
  selector: 'app-list-column-visibility-dialog',
  templateUrl: './list-column-visibility-dialog.component.html',
  styleUrls: ['./list-column-visibility-dialog.component.scss'],
})
export class ListColumnVisibilityDialogComponent {
  defaultColumns: ColumnsDialogResponse = [];

  visible: ColumnsDialogResponse = [];

  hidden: ColumnsDialogResponse = [];

  get canDrag() {
    return this.visible.length > 2;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ColumnsDialogData
  ) {
    this.defaultColumns = Object.keys(data.columnMap);
    this.visible = [...data.displayedColumns];
    this.hidden = Object.keys(data.columnMap).filter(
      (key) => !this.visible.includes(key)
    );
  }

  restoreDefaultColumns() {
    this.visible = [...this.defaultColumns];
    this.hidden = [];
  }

  drop(event: CdkDragDrop<string[]>): void {
    const itemDroppedInSameContainer =
      event.previousContainer === event.container;
    if (itemDroppedInSameContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const destinationList = event.container.data;
      const itemPosition =
        destinationList === this.visible &&
        destinationList.length === MINIMUM_VISIBLE_COLUMNS
          ? 2
          : event.currentIndex;
      this.transferListItem({
        fromList: event.previousContainer.data,
        toList: event.container.data,
        itemIndexInOriginList: event.previousIndex,
        positionInDestinationList: itemPosition,
      });
    }
  }

  remove(item: string) {
    const endOfList = this.hidden.length;
    this.transferListItem({
      fromList: this.visible,
      toList: this.hidden,
      itemIndexInOriginList: this.visible.indexOf(item),
      positionInDestinationList: endOfList,
    });
  }

  add(item: string) {
    const endOfList = this.visible.length;
    this.transferListItem({
      fromList: this.hidden,
      toList: this.visible,
      itemIndexInOriginList: this.hidden.indexOf(item),
      positionInDestinationList: endOfList,
    });
  }

  private transferListItem({
    fromList,
    toList,
    itemIndexInOriginList,
    positionInDestinationList,
  }: {
    fromList: string[];
    toList: string[];
    itemIndexInOriginList: number;
    positionInDestinationList: number;
  }) {
    transferArrayItem(
      fromList,
      toList,
      itemIndexInOriginList,
      positionInDestinationList
    );
  }
}
