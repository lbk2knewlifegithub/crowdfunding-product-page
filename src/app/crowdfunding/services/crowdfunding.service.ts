import { Injectable } from '@angular/core';
import * as fromData from '@lbk/crowdfunding/data';
import { Observable, of } from 'rxjs';
import { Pledge, Stats } from '../models';

@Injectable({ providedIn: 'root' })
export class CrowdfundingService {
  getPledges(): Observable<Pledge[]> {
    return of(fromData.pledges);
  }

  getStats(): Observable<Stats> {
    return of(fromData.stats);
  }
}
