import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PledgesDialogComponent, ThanksComponent } from '../components';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(public readonly _dialog: MatDialog) {}

  thankSupport(): Observable<void> {
    let dialogRef = this._dialog.open(ThanksComponent, {
      panelClass: 'thanks-dialog',
    });
    return dialogRef.afterClosed();
  }

  openPledgesDialog(id?: number): Observable<void> {
    let dialogRef = this._dialog.open(PledgesDialogComponent, {
      data: { id },
    });
    return dialogRef.afterClosed();
  }
}
