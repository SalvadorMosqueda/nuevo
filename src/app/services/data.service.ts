import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DateService {
  private dateSource = new BehaviorSubject<Date | null>(null);
  selectedDate$ = this.dateSource.asObservable();

  setDate(date: Date | null) {
    this.dateSource.next(date);
  }
}