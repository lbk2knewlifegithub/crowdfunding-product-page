import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PledgesDialogComponent } from '../components/dialog/pledges-dialog.component';
import { ThanksDialogComponent } from '../components/dialog/thanks-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(public readonly _dialog: MatDialog) {}

  thankSupport(): Observable<void> {
    let dialogRef = this._dialog.open(ThanksDialogComponent, {
      panelClass: 'thanks-dialog',
    });
    return dialogRef.afterClosed();
  }

  openPledgesDialog(id?: number): Observable<{ id: number; amount: number }> {
    let dialogRef = this._dialog.open(PledgesDialogComponent, {
      data: { id },
      panelClass: 'pledges-dialog',
    });
    return dialogRef.afterClosed();
  }
}
